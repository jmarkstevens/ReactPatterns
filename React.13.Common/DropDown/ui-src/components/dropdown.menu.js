import React, {Component} from 'react';

import JDropMenu from './common/jDropMenu';

var DropDownMenuSty = {
	fontSize: '1.2em',
	padding: '2px 2px 0 0',
	position: 'relative',
	right: '0',
	top: '0'
};

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

class DropDownMenuRender extends Component {
	binder(...methods) { methods.forEach( (method) => this[method] = this[method].bind(this) ); }

	render() {
		var optionLabel = this.state.option.label;
		var optionValue = this.state.option.value;
		return (
			<div>
				<div id='DropDownMenuSty' style={DropDownMenuSty}>
					<JDropMenu options={options} onChange={this.onSelect} />
				</div>
				Label: {optionLabel}<br />
				Value: {optionValue}
			</div>
		)
	}
}

export default class DropDownMenu extends DropDownMenuRender {
	constructor() {
	  super();
		this.state = {option: {}};
	  this.binder('onSelect');
	}
	onSelect(option) { this.setState({option: option}); }
}
