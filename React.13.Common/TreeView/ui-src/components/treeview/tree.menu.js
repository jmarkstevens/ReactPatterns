import React, {Component} from 'react';

import Actions from '../../flux/Actions';

var TreeMenuSty = {
	fontSize: '1.2em',
	padding: '2px 2px 0 0',
	position: 'relative',
	right: '0',
	top: '0'
};

var DropdownSty = { position: 'relative' };

var DropdownControlSty = {
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

var DropdownMenuSty = {
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

var DropdownSeperatorSty = {
	backgroundColor: '#000000',
	height: '3px',
	margin: '3px 0',
	width: '100%'
};

var DropdownNoresultsSty = {
	boxSizing: 'border-box',
	color: '#ccc',
	cursor: 'default',
	display: 'block',
	padding: '8px 10px'
};

var DropdownOptionSty = {
	boxSizing: 'border-box',
	color: '#EEFFEE',
	cursor: 'pointer',
	display: 'block'
};

function OptionsMap(option) {
	if (option.type == 'seperator') {
		return (<div style={DropdownSeperatorSty} key={option.key}></div>)
	} else {
		return (
			<div key={option.value} style={DropdownOptionSty} onMouseDown={this.setValue.bind(this, option)} onClick={this.setValue.bind(this, option)}>{option.label}</div>
		)
	}
}

function BuildMenu(vr) {
	var ops = vr.props.options.map(OptionsMap, vr);
	return ops.length ? ops : <div style={DropdownNoresultsSty}>No options found</div>
}

class MenuDropRender extends Component {
	binder(...methods) { methods.forEach( (method) => this[method] = this[method].bind(this) ); }

 	render() {
		var vr = this;
		var items = BuildMenu(vr);

		var value = (<i className="fa fa-bars fa-lg"></i>);
		var menu = this.state.isOpen ? <div style={DropdownMenuSty}>{items}</div> : null;

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

function handleMouseDown(event) {
	if (event.type == 'mousedown' && event.button !== 0) return;
	event.stopPropagation();
	event.preventDefault();
	this.setState({ isOpen: !this.state.isOpen })
}

function setValue(option) {
	if (option !== this.state.selected && this.props.onChange) {
		this.props.onChange(option);
	}
	this.setState({ selected: option, isOpen: false });
}

class MenuDrop extends MenuDropRender {
	constructor() { 
	  super();
		this.state = { isOpen: false, selected: {} }; 
	  this.setValue = setValue;
	  this.handleMouseDown = handleMouseDown;
	  this.binder('setValue', 'handleMouseDown');
	}
}

class TreeMenuRender extends Component {
	render() {
		var options = [
			{ value: 'new', label: 'New' },
			{ value: 'edit', label: 'Edit' },
			{ type: 'seperator', key: '100'},
			{ value: 'moveUp', label: 'Move up' },
			{ value: 'moveDown', label: 'Move down' },
			{ type: 'seperator', key: '101'},
			{ value: 'rename', label: 'Rename' },
			{ type: 'seperator', key: '102'},
			{ value: 'remove', label: 'Remove' }
		];

		return (
			<div id='TreeMenuSty' style={TreeMenuSty}>
				<MenuDrop options={options} onChange={this.onSelect} />
			</div>
		)
	}
}

export default class TreeMenu extends TreeMenuRender {
	onSelect(option) { Actions.treeActions(option.value); }
}
