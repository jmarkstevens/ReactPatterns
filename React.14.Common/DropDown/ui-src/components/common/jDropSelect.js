import React, {Component} from 'react';

let DropdownSty = { display: 'inline-block', lineHeight: '18px', position: 'relative' };

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
	right: '0',
	top: '100%',
	WebkitOverflowScrolling: 'touch',
	whiteSpace: 'nowrap',
	zIndex: '20'
};

let DropdownArrowSty = {
	borderColor: '#999 transparent transparent',
	borderStyle: 'solid',
	borderWidth: '5px 5px 0',
	content: "' '",
	display: 'block',
	height: '0',
	marginTop: '-ceil(5)',
	position: 'absolute',
	right: '8px',
	top: '6px',
	width: '0'
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

let placeSty = {
	backgroundColor: 'transparent',
	paddingRight: '20px'
};

function OptionsMap(option) {
	if (option.type == 'seperator') {
		return (<div style={DropdownSeperatorSty} key={option.key}></div>)
	} else {
		let selected = Boolean(option.label == this.state.selected.label);
		let labelSpanSty = {cursor: 'pointer'};
		labelSpanSty.color = selected ? 'green' : 'black';
		return (
			<div id='DropdownOptionSty' key={option.value} style={DropdownOptionSty} onMouseDown={this.setValue.bind(this, option)} onClick={this.setValue.bind(this, option)}>
				<span style={labelSpanSty}>{option.label}</span>
			</div>
		)
	}
}

class JDropSelectRender extends Component {
	render() {
		let items = this.props.options.map(OptionsMap, this);

		let value = (<div style={placeSty}>{this.state.selected.label}</div>);
		let menu = this.state.isOpen ? <div style={DropdownMenuSty}>{items}</div> : null;

		return (
			<div id='DropdownSty' style={DropdownSty}>
				<div id='DropdownControlSty' style={DropdownControlSty} onMouseDown={this.handleMouseDown} onTouchEnd={this.handleMouseDown}>
	          {value}
						<span id='DropdownArrowSty' style={DropdownArrowSty} />
				</div>
	      {menu}
			</div>
		)
	}
}

export default class JDropSelect extends JDropSelectRender {
	constructor() {
	  super();
		this.state = { isOpen: false, selected: {} };
	}
	componentWillMount() {
		this.setState({selected: this.props.defaultSelected || { label: 'Select...', value: '' }})
	}
	componentWillReceiveProps(newProps) {
		if (newProps.defaultSelected && newProps.defaultSelected !== this.state.selected) {
			this.setState({selected: newProps.defaultSelected});
		}
	}
	handleMouseDown = (event) => {
		if (event.type == 'mousedown' && event.button !== 0) return;
		event.stopPropagation();
		event.preventDefault();
		this.setState({ isOpen: !this.state.isOpen })
	}
	setValue = (option) => {
		if (option !== this.state.selected && this.props.onChange) this.props.onChange(this.props.itemName, option);
		this.setState({ selected: option, isOpen: false });
	}
}
