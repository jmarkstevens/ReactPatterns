const React = require('react');
const Radium = require('radium');

const Icon = require('./Icon');
const StyleConstants = require('./Style');

class TypeAhead extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      highlightedValue: null,
      isOpen: false,
      searchString: '',
      selectedItems: props.preSelectedItems
    };
  }
  
  _getFilteredItems = () => {
    return this.props.items.filter(item => {
      return this.state.selectedItems.indexOf(item) === -1 &&
             item.toLowerCase().indexOf(this.state.searchString.toLowerCase()) > -1;
    });
  }

  _handleBlur = () => {
    this.setState({
      highlightedValue: null,
      isOpen: false,
      searchString: ''
    });
  }

  _handleFocus = () => {
    this.setState({isOpen: true});

    if (this.input) this.input.focus();
  }

  _handleItemMouseOver = () => {
    this.setState({highlightedValue: null});
  }

  _handleSelectAll = () => {
    this.props.onItemSelect(null, this.props.items);

    this.setState({
      highlightedValue: null,
      searchString: '',
      selectedItems: this.props.items
    });
  }

  _handleClearAll = () => {
    this.props.onItemSelect(null, []);

    this.setState({
      highlightedValue: null,
      searchString: '',
      selectedItems: []
    });
  }

  _handleItemSelect = (item) => {
    //add to selectedItems
    const selectedItems = this.state.selectedItems;

    selectedItems.push(item);

    this.props.onItemSelect(item, selectedItems);

    this.setState({
      highlightedValue: null,
      searchString: '',
      selectedItems
    });

    if (this.input) this.input.focus();
  }

  _handleItemRemove = (item) => {
    const selectedItems = this.state.selectedItems.filter(selectedItem => {
      return selectedItem !== item;
    });

    this.props.onItemRemove(item, selectedItems);

    this.setState({selectedItems});

    if (this.input) this.input.focus();
  }

  _handleInputKeyDown = (e) => {
    const searchString = e.target.value;
    const highlightedValue = this.state.highlightedValue;
    const selectedItems = this.state.selectedItems;
    const filteredItems = this._getFilteredItems();

    //add item on enter
    if (e.keyCode === 13 && highlightedValue && selectedItems.indexOf(highlightedValue) === -1) {
      this._handleItemSelect(highlightedValue);
    }

    //add first returned item on tab
    if (e.keyCode === 9) {
      e.preventDefault();

      const item = filteredItems[0];

      if (item) {
        this._handleItemSelect(item);
      }
    }

    //remove tag on backspace
    if (e.keyCode === 8 && !searchString && selectedItems.length) {
      this._handleItemRemove(selectedItems[selectedItems.length - 1]);
    }

    //highlight next item on down
    if (e.keyCode === 40) {
      e.preventDefault();
      const nextIndex = filteredItems.indexOf(highlightedValue) + 1;

      if (nextIndex < filteredItems.length) {
        this.setState({highlightedValue: filteredItems[nextIndex]});
      }

      this._scrollList(nextIndex, 'up');

      this.setState({selectedValue: filteredItems[nextIndex]});
    }

    //highlight previous item on up
    if (e.keyCode === 38) {
      e.preventDefault();
      const previousIndex = filteredItems.indexOf(highlightedValue) - 1;

      if (previousIndex > -1) {
        this.setState({highlightedValue: filteredItems[previousIndex]});
      }

      this._scrollList(previousIndex, 'down');
      this.setState({selectedValue: filteredItems[previousIndex]});
    }

    //lose foucus on esc
    if (e.keyCode === 27) {
      e.preventDefault();

      this.setState({
        searchString: '',
        isOpen: false,
        highlightedValue: null
      });

      if (this.input) this.input.blur();
    }
  }

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
  }

  _handleInputChange = (e) => { this.setState({searchString: e.target.value}); }

  _renderSelectedItems = () => {
    return this.state.selectedItems.map((item, index) => {
      return (
        <div className="mx-typeahead-selected" key={index} style={styles.itemTag}>
          {item}
          <Icon
            elementProps={{onClick: this._handleItemRemove.bind(null, item)}}
            size={15}
            style={styles.removeIcon}
            type="close"
          />
        </div>);
    });
  }

  _renderItemList = () => {
    return (
      <div
        className="mx-typeahead-option-list"
        ref={(ref) => this.optionList = ref}
        style={styles.itemList}
      >
        {this.state.selectedItems.length !== this.props.items.length ? (
          <div
            className="mx-typeahead-select-all"
            key="selectAllItem"
            onMouseDown={this._handleSelectAll}
            onMouseOver={this._handleItemMouseOver}
            style={styles.item}
          >
            Select All
          </div>
        ) : (
          null
        )}

        {this.state.selectedItems.length > 0 ? (
          <div
            className="mx-typeahead-clear-all"
            key="clearAllItem"
            onMouseDown={this._handleClearAll}
            onMouseOver={this._handleItemMouseOver}
            style={styles.item}
          >
            Clear
          </div>
        ) : (
          null
        )}

        {this._getFilteredItems().map((item, index) => {
          return (
            <div
              className="mx-typeahead-option"
              key={index}
              onMouseDown={this._handleItemSelect.bind(null, item)}
              onMouseOver={this._handleItemMouseOver}
              style={[styles.item, (item === this.state.highlightedValue) && styles.activeItem]}
            >
              {item}
            </div>
          );
        })}
      </div>
    );
  }

  render() {
    return (
      <div
        className="mx-typeahead"
        onBlur={this._handleBlur}
        onFocus={this._handleFocus}
        style={[styles.component, this.props.style]}
        tabIndex="0"
      >
        {this._renderSelectedItems()}

        <input
          className="mx-typeahead-input"
          key="input"
          onChange={this._handleInputChange}
          onKeyDown={this._handleInputKeyDown}
          placeholder={!this.state.selectedItems.length ? this.props.placeholderText : null}
          ref={(ref) => this.input = ref}
          style={styles.input}
          type="text"
          value={this.state.searchString}
        />

        <div className="mx-typeahead-option-list-container" style={[styles.itemListContainer, !this.state.isOpen && {display: 'none'}]}>
          {this._renderItemList()}
        </div>
      </div>
    );
  }
}

TypeAhead.propTypes = {
  items: React.PropTypes.array,
  onItemRemove: React.PropTypes.func,
  onItemSelect: React.PropTypes.func,
  placeholderText: React.PropTypes.string,
  preSelectedItems: React.PropTypes.array
};

TypeAhead.defaultProps = {
  items: [],
  onItemRemove () {},
  onItemSelect () {},
  placeholderText: 'Select Filters',
  preSelectedItems: []
};

const styles = {
  component: {
    backgroundColor: '#FFFFFF',
    borderColor: '#e5e5e5',
    borderRadius: '3px',
    borderStyle: 'solid',
    borderWidth: '1px',
    boxSizing: 'border-box',
    color: '#2E323F',
    fontFamily: StyleConstants.FontFamily,
    fontSize: '12px',
    paddingTop: '10px',
    paddingRight: '10px',
    paddingBottom: '10px',
    paddingLeft: '10px',
    position: 'relative',
    WebkitAppearance: 'none',
    width: '100%',
    minHeight: '35px',

    ':focus': {
      backgroundColor: '#FFFFFF',
      boxShadow: 'none',
      color: StyleConstants.Colors.CHARCOAL,
      outline: 'none'
    }
  },
  activeItem: {
    backgroundColor: StyleConstants.Colors.PRIMARY,
    color: StyleConstants.Colors.WHITE
  },
  clearFix: {
    clear: 'both'
  },
  input: {
    backgroundColor: '#FFFFFF',
    borderWidth: 0,
    color: StyleConstants.Colors.CHARCOAL,
    fontSize: '13px',
    minWidth: '33%',
    outline: 'none',
    WebkitAppearance: 'none',

    ':focus': {
      borderWidth: 0,
      boxShadow: 'none',
      outline: 'none'
    }
  },
  itemList: {
    minHeight: '20px',
    maxHeight: '200px',
    overflow: 'auto'
  },
  itemListContainer: {
    clear: 'both',
    backgroundColor: '#fff',
    position: 'absolute',
    left: -1,
    right: -1,
    marginTop: '7px',
    marginBottom: '20px',
    border: '1px solid #E5E5E5',
    borderRadius: '0 0 3px 3px',
    boxShadow: StyleConstants.ShadowHigh,
    zIndex: 10
  },
  itemTag: {
    backgroundColor: '#eee',
    borderColor: '#e5e5e5',
    borderRadius: '3px',
    borderStyle: 'solid',
    borderWidth: '1px',
    display: 'inline-block',
    lineHeight: '0.8em',
    marginTop: '1px',
    marginRight: '2px',
    marginBottom: '1px',
    paddingLeft: '3px',
    position: 'relative'
  },
  item: {
    color: StyleConstants.Colors.ASH,
    cursor: 'pointer',
    paddingTop: '10px',
    paddingRight: '10px',
    paddingBottom: '10px',
    paddingLeft: '10px',
    lineHeight: '1em',

    ':focus': {
      border: 'none',
      boxShadow: 'none',
      outline: 'none'
    },
    ':hover': {
      backgroundColor: StyleConstants.Colors.PRIMARY,
      color: StyleConstants.Colors.WHITE
    }
  },
  removeIcon: {
    color: StyleConstants.Colors.ASH,
    marginLeft: '5px',
    cursor: 'pointer'
  }
};

module.exports = Radium(TypeAhead);
