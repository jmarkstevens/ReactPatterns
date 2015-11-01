import React from 'react';

let DropdownSty = { position: 'relative' };

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
	right: '0',
	top: '100%',
	zIndex: '10'
};

let DropdownSeperatorSty = {
	backgroundColor: '#000000',
	height: '3px',
	margin: '3px 0',
	width: '100%'
};

let DropdownNoresultsSty = {
	boxSizing: 'border-box',
	color: '#ccc',
	cursor: 'default',
	display: 'block',
	padding: '8px 10px'
};

let DropdownOptionSty = {
	boxSizing: 'border-box',
	color: '#EEFFEE',
	cursor: 'pointer',
	display: 'block'
};

class JDropMenuRender extends React.Component {
	render() {
		let items = this.props.options.map((option) => {
			if (option.type == 'seperator') {
				return (<div style={DropdownSeperatorSty} key={option.key}></div>)
			} else {
				return (
					<div
						key={option.value}
						style={DropdownOptionSty}
						onMouseDown={this.setValue.bind(this, option)}
						onClick={this.setValue.bind(this, option)}
					>{option.label}</div>
				)
			}
		});

		let value = (<i className="fa fa-bars fa-lg"></i>);
		let menu = this.state.isOpen ? <div style={DropdownMenuSty}>{items}</div> : null;

		return (
			<div style={DropdownSty}>
				<div style={DropdownControlSty} onMouseDown={this.handleMouseDown} onTouchEnd={this.handleMouseDown}>
					{value}
				</div>
	      {menu}
			</div>
		)
	}
}

export default class JDropMenu extends JDropMenuRender {
	constructor() {
	  super();
		this.state = { isOpen: false, selected: {} };
	}
	handleMouseDown = (event) => {
		if (event.type == 'mousedown' && event.button !== 0) return;
		event.stopPropagation();
		event.preventDefault();
		this.setState({ isOpen: !this.state.isOpen })
	}
	setValue = (option) => {
		this.props.onChange(option);
		this.setState({isOpen: false});
	}
}
