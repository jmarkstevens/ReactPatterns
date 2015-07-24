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
		return (
			<div id='DropDownMenuSty' style={DropDownMenuSty}>
				<JDropMenu options={options} onChange={this.onSelect} />
			</div>
		)
	}
}

export default class DropDownMenu extends DropDownMenuRender {
	constructor() { 
	  super();
	  this.binder('onSelect');
	}
	onSelect(option) { window.alert('Label: ' + option.label + ' Value: ' + option.value); }
}
