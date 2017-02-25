const React = require('react');
const Radium = require('radium');

const Icon = require('./Icon');

let DropdownArrowSty = {
  borderColor: '#999 transparent transparent',
  borderStyle: 'solid',
  borderWidth: '5px 5px 0',
  content: '',
  display: 'block',
  height: '0px',
  marginTop: '-ceil(5)',
  position: 'absolute',
  right: '8px',
  top: '6px',
  width: '0px',
};

class MultiSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      highlightedValue: null,
      isOpen: false,
      searchString: '',
      selectedItems: props.preSelectedItems,
    };
  }

  componentWillReceiveProps = nextProps => {
    if (nextProps.currentValue.length === 0 && this.props.currentValue.length > 0) {
      this.setState({selectedItems: []});
    }
  };

  _getFilteredItems = () => {
    return this.props.items.filter(item => {
      return this.state.selectedItems.indexOf(item) === -1 &&
        item.label.toLowerCase().indexOf(this.state.searchString.toLowerCase()) > -1;
    });
  };

  _handleBlur = () => {
    this.setState({
      highlightedValue: null,
      isOpen: false,
      searchString: '',
    });
  };

  _handleFocus = () => {
    this.setState({isOpen: true});

    if (this.input) this.input.focus();
  };

  _handleItemMouseOver = () => {
    this.setState({highlightedValue: null});
  };

  _handleSelectAll = () => {
    this.props.onChange(this.props.itemName, this.props.items);

    this.setState({
      highlightedValue: null,
      searchString: '',
      selectedItems: this.props.items,
    });
  };

  _handleClearAll = () => {
    this.props.onChange(this.props.itemName, []);

    this.setState({
      highlightedValue: null,
      searchString: '',
      selectedItems: [],
    });
  };

  _handleItemSelect = e => {
    //add to selectedItems
    const selectedItems = this.state.selectedItems;

    const getFilteredItemsIndex = parseInt(e.target.id);
    const item = this._getFilteredItems()[getFilteredItemsIndex];

    selectedItems.push(item);

    this.props.onChange(this.props.itemName, selectedItems);

    this.setState({
      highlightedValue: null,
      searchString: '',
      selectedItems,
    });

    if (this.input) this.input.focus();
  };

  _handleItemRemove = e => {
    const item = this.state.selectedItems[parseInt(e.target.id)];

    const selectedItems = this.state.selectedItems.filter(selectedItem => {
      return selectedItem !== item;
    });

    this.props.onChange(this.props.itemName, selectedItems);

    this.setState({selectedItems});

    if (this.input) this.input.focus();
  };

  _scrollList = (nextIndex, scrollDirection) => {
    const filteredItems = this._getFilteredItems();
    const ul = this.optionList;
    const skipClearSelectAll = 2;
    const activeLi = ul.children[nextIndex + skipClearSelectAll];

    if (scrollDirection === 'up' && activeLi) {
      const heightFromTop = (nextIndex + skipClearSelectAll) * activeLi.clientHeight + activeLi.clientHeight;

      if (heightFromTop > ul.clientHeight || nextIndex === 0) {
        ul.scrollTop = activeLi.offsetTop - activeLi.clientHeight * skipClearSelectAll;
      }
    } else if (scrollDirection === 'down' && activeLi) {
      const heightFromBottom = (filteredItems.length - nextIndex) * activeLi.clientHeight;

      if (heightFromBottom > ul.clientHeight) {
        ul.scrollTop = activeLi.offsetTop - activeLi.clientHeight * skipClearSelectAll;
      }

      if (nextIndex === filteredItems.length - 1) {
        ul.scrollTop = filteredItems.length * activeLi.clientHeight;
      }
    }
  };

  _handleClose = () => {
    this.setState({
      searchString: '',
      isOpen: false,
      highlightedValue: null,
    });
  };

  _handleInputChange = e => {
    this.setState({searchString: e.target.value});
  };

  _renderSelectedItems = () => {
    return this.state.selectedItems.map((item, index) => {
      return (
        <div className="mx-MultiSelect-selected" key={index} style={styles.itemTag}>
          {item.label}
          <Icon
            elementProps={{id: index, onClick: this._handleItemRemove}}
            size={15}
            style={styles.removeIcon}
            type="close"
          />
        </div>
      );
    });
  };

  _renderItemList = () => {
    const selectAll = (
      <div
        className="mx-MultiSelect-select-all"
        key="selectAllItem"
        onMouseDown={this._handleSelectAll}
        onMouseOver={this._handleItemMouseOver}
        style={styles.item}
      >
        Select All
      </div>
    );
    const clear = (
      <div
        className="mx-MultiSelect-clear-all"
        key="clearAllItem"
        onMouseDown={this._handleClearAll}
        onMouseOver={this._handleItemMouseOver}
        style={styles.item}
      >
        Clear
      </div>
    );
    return (
      <div className="mx-MultiSelect-option-list" ref={ref => this.optionList = ref} style={styles.itemList}>
        {this.state.selectedItems.length !== this.props.items.length ? selectAll : null}

        {this.state.selectedItems.length > 0 ? clear : null}

        {this._getFilteredItems().map((item, index) => {
          return (
            <div
              className="mx-MultiSelect-option FlexBox FlexJustify"
              key={index}
              id={index}
              onMouseDown={this._handleItemSelect}
              onMouseOver={this._handleItemMouseOver}
              style={[styles.item, item === this.state.highlightedValue && styles.activeItem]}
            >
              <span>{item.label}</span>
              <span>{item.count}</span>
            </div>
          );
        })}
        <div
          className="mx-MultiSelect-close"
          key="close"
          onMouseDown={() => this._handleClose()}
          onMouseOver={this._handleItemMouseOver}
          style={[styles.item, styles.close]}
        >
          <span>Close</span>
        </div>
      </div>
    );
  };

  render() {
    return (
      <div
        className="mx-MultiSelect"
        onBlur={this._handleBlur}
        onFocus={this._handleFocus}
        style={[styles.component, this.props.style]}
        tabIndex="0"
      >
        {this._renderSelectedItems()}

        <div
          className="mx-MultiSelect-option-list-container"
          style={[styles.itemListContainer, !this.state.isOpen && {display: 'none'}]}
        >
          {this._renderItemList()}
        </div>
        <span id="DropdownArrowSty" style={DropdownArrowSty} />
      </div>
    );
  }
}

MultiSelect.propTypes = {
  items: React.PropTypes.array,
  onItemRemove: React.PropTypes.func,
  onItemSelect: React.PropTypes.func,
  placeholderText: React.PropTypes.string,
  preSelectedItems: React.PropTypes.array,
};

MultiSelect.defaultProps = {
  items: [],
  onItemRemove() {
  },
  onItemSelect() {
  },
  placeholderText: 'Select Filters',
  preSelectedItems: [],
};

const StyleConstants = {
  FontFamily: 'ProximaNovaRegular, Helvetica, Arial, sans-serif',
  Colors: {
    BLACK: '#000000',
    WHITE: '#FFFFFF',
    NormalBackground: '#eaeae0',
    ActiveBackground: '#435c3c',
  },
};

const styles = {
  component: {
    backgroundColor: StyleConstants.Colors.NormalBackground,
    boxSizing: 'border-box',
    color: 'black',
    fontFamily: StyleConstants.FontFamily,
    fontSize: '1em',
    lineHeight: '18px',
    padding: '0px',
    position: 'relative',
    WebkitAppearance: 'none',
    width: '100%',
    minHeight: '18px',

    ':focus': {
      backgroundColor: StyleConstants.Colors.NormalBackground,
      boxShadow: 'none',
      color: StyleConstants.Colors.BLACK,
      outline: 'none',
    },
  },
  activeItem: {
    backgroundColor: StyleConstants.Colors.ActiveBackground,
    color: StyleConstants.Colors.WHITE,
  },
  clearFix: {
    clear: 'both',
  },
  close: {
    padding: '5px',
    textAlign: 'center',
  },
  itemList: {
    minHeight: '18px',
    maxHeight: '200px',
    overflow: 'auto',
  },
  itemListContainer: {
    clear: 'both',
    backgroundColor: StyleConstants.Colors.NormalBackground,
    position: 'absolute',
    left: -1,
    right: -1,
    marginTop: '7px',
    marginBottom: '20px',
    zIndex: 10,
  },
  itemTag: {
    backgroundColor: StyleConstants.Colors.NormalBackground,
    display: 'inline-block',
    lineHeight: '0.8em',
    marginTop: '1px',
    marginRight: '2px',
    marginBottom: '1px',
    paddingLeft: '3px',
    position: 'relative',
  },
  item: {
    color: StyleConstants.Colors.BLACK,
    cursor: 'pointer',
    padding: '3px',
    lineHeight: '1em',

    ':focus': {
      border: 'none',
      boxShadow: 'none',
      outline: 'none',
    },
    ':hover': {
      backgroundColor: StyleConstants.Colors.ActiveBackground,
      color: StyleConstants.Colors.WHITE,
    },
  },
  removeIcon: {
    color: StyleConstants.Colors.BLACK,
    marginLeft: '5px',
    cursor: 'pointer',
  },
};

module.exports = Radium(MultiSelect);
