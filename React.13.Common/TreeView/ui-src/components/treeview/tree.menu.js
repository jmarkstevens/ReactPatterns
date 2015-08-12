import React, {Component} from 'react';

import Actions from '../../flux/Actions';
import JDropMenu from './../common/jDropMenu';

var TreeMenuSty = {
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

class TreeMenuRender extends Component {
	render() {
		return (
			<div id='TreeMenuSty' style={TreeMenuSty}>
				<JDropMenu options={options} onChange={this.onSelect} />
			</div>
		)
	}
}

export default class TreeMenu extends TreeMenuRender {
	onSelect(option) { Actions.treeActions(option.value); }
}
