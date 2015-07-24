import React, {Component} from 'react';

import TreeList from './tree.list';
import TreeMenu from './tree.menu';
import TreeEdit from './tree.edit';
import TreeNew from './tree.new';

var TreeCtrlRenderSty = { height: 'calc(100% - 2px)'};

class TreeCtrlRender extends Component {
 	render() {
		return (
			<div id='TreeCtrlRenderSty' style={TreeCtrlRenderSty}>
				<TreeMenu />
				<TreeList data={this.props.treeData} />
				<TreeEdit treeNode={this.props.currentTreeNode} visable={this.props.showTreeEdit} />
				<TreeNew visable={this.props.showTreeNew} />
			</div>
		);
	}
}

export default class TreeCtrl extends TreeCtrlRender {}
