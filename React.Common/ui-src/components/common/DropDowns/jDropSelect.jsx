import React from 'react';

let DropdownSty = {display: 'inline-block', lineHeight: '18px', position: 'relative'};

let DropdownControlSty = {
  background: 'transparent',
  boxSizing: 'border-box',
  cursor: 'default',
  overflow: 'hidden',
  outline: 'none',
  position: 'relative',
  textAlign: 'right',
  transition: 'all 200ms ease',
  width: '100%'
};

let DropdownMenuSty = {
  backgroundColor: '#FFF',
  boxShadow: '0 1px 0 rgba(0, 0, 0, 0.06)',
  boxSizing: 'border-box',
  fontSize: '.9em',
  lineHeight: '140%',
  marginTop: '-1px',
  maxHeight: '300px',
  overflowY: 'auto',
  padding: '8px 12px',
  position: 'absolute',
  right: '0px',
  top: '100%',
  WebkitOverflowScrolling: 'touch',
  whiteSpace: 'nowrap',
  zIndex: '200'
};

let DropdownArrowSty = {
  borderColor: '#999 transparent transparent',
  borderStyle: 'solid',
  borderWidth: '5px 5px 0',
  content: '\' \'',
  display: 'block',
  height: '0px',
  marginTop: '-ceil(5)',
  position: 'absolute',
  right: '8px',
  top: '6px',
  width: '0px'
};

let DropdownSeperatorSty = {
  backgroundColor: '#000000',
  height: '3px',
  margin: '3px 0',
  width: '100%'
};

let DropdownOptionSty = {
  boxSizing: 'border-box',
  color: '#EEFFEE',
  cursor: 'pointer',
  display: 'block'
};

let placeSty = {
  backgroundColor: 'transparent',
  paddingRight: '20px'
};

export default class JDropSelect extends React.Component {
  state = {isOpen: false, selected: {label: 'Select...', value: ''}};
  componentWillMount() {
    this.setState({selected: this.props.defaultSelected || {label: 'Select...', value: ''}});
  }
  componentWillReceiveProps(newProps) {
    if (newProps.defaultSelected && newProps.defaultSelected !== this.state.selected) {
      this.setState({selected: newProps.defaultSelected});
    }
  }
  setValue = (option) => {
    if (option !== this.state.selected && this.props.onChange) this.props.onChange(this.props.itemName, option);
    this.setState({selected: option, isOpen: false});
  };
  handleMouseDown = (event) => {
    if (event.type == 'mousedown' && event.button !== 0) return;
    event.stopPropagation();
    event.preventDefault();
    this.setState({isOpen: !this.state.isOpen});
  };
  render() {
    let items = this.props.options.map((option) => {
      if (option.type == 'seperator') {
        return (<div style={DropdownSeperatorSty} key={option.key} />);
      } else {
        let selected = Boolean(option.label == this.state.selected.label);
        let labelSpanSty = {cursor: 'pointer'};
        labelSpanSty.color = selected ? 'green' : 'black';
        return (
          <div
            id="DropdownOptionSty"
            key={option.value}
            style={DropdownOptionSty}
            onMouseDown={() => this.setValue(option)}
            onClick={() => this.setValue(option)}
          >
            <span style={labelSpanSty}>{option.label}</span>
          </div>
        );
      }
    });

    let value = (<div style={placeSty}>{this.state.selected.label}</div>);
    let menu = this.state.isOpen ? <div style={DropdownMenuSty}>{items}</div> : null;

    return (
      <div id="DropdownSty" style={DropdownSty}>
        <div
          id="DropdownControlSty"
          style={DropdownControlSty}
          onMouseDown={this.handleMouseDown}
          onTouchEnd={this.handleMouseDown}
        >
          {value}
          <span id="DropdownArrowSty" style={DropdownArrowSty} />
        </div>
        {menu}
      </div>
    );
  }
}
