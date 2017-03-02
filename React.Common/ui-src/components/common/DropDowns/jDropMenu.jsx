import React from 'react';

let DropdownSty = {position: 'relative'};

let DropdownControlSty = {
  position: 'relative',
  overflow: 'hidden',
  background: 'transparent',
  boxSizing: 'border-box',
  cursor: 'default',
  outline: 'none',
  padding: '5px 5px',
  textAlign: 'right',
  transition: 'all 200ms ease',
  width: '100%'
};

let DropdownMenuSty = {
  backgroundColor: '#261a3b',
  boxShadow: '0 1px 0 rgba(0, 0, 0, 0.06)',
  boxSizing: 'border-box',
  fontSize: '.9em',
  lineHeight: '150%',
  marginTop: '-1px',
  maxHeight: '300px',
  overflowY: 'auto',
  padding: '8px 12px',
  position: 'absolute',
  right: '0px',
  top: '100%',
  zIndex: '200'
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

class JDropMenu extends React.Component {
  state = {isOpen: false, selected: {}};
  setValue = (e) => {
    let selectedOption = this.props.options[parseInt(e.target.id)];
    this.props.onChange(selectedOption);
    this.setState({isOpen: false});
  };
  handleMouseDown = (event) => {
    if (event.type == 'mousedown' && event.button !== 0) return;
    event.stopPropagation();
    event.preventDefault();
    this.setState({isOpen: !this.state.isOpen});
  };
  render() {
    let items = this.props.options.map((option, index) => {
      if (option.type == 'seperator') {
        return (<div style={DropdownSeperatorSty} key={option.key} />);
      } else {
        return (
          <div
            id={index}
            key={option.value}
            style={DropdownOptionSty}
            onClick={this.setValue}
          >{option.label}</div>
        );
      }
    });

    let value = (<i className="fa fa-bars fa-lg" />);
    let menu = this.state.isOpen ? <div style={DropdownMenuSty}>{items}</div> : null;

    return (
      <div style={DropdownSty}>
        <div style={DropdownControlSty} onMouseDown={this.handleMouseDown} onTouchEnd={this.handleMouseDown}>
          {value}
        </div>
        {menu}
      </div>
    );
  }
}

JDropMenu.propTypes = {
  options: React.PropTypes.object.isRequired,
  onChange: React.PropTypes.func.isRequired
};

module.exports = JDropMenu;
