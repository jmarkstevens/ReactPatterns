import React, {Component} from 'react';

import TreeList from './tree.list';
import TreeMenu from './tree.menu';
import TreeEdit from './tree.edit';
import TreeNew from './tree.new';

var TreeCtrlRenderSty = { height: 'calc(100% - 2px)'};

class TreeCtrlRender extends Component {
 	render() {
    var hideTreeEdit = !this.props.showTreeEdit;
    var hideTreeNew = !this.props.showTreeNew;
		return (
			<div id='TreeCtrlRenderSty' style={TreeCtrlRenderSty}>
				<TreeMenu />
				<TreeList data={this.props.treeData} />
				<TreeEdit treeNode={this.props.currentTreeNode} hide={hideTreeEdit} />
				<TreeNew hide={hideTreeNew} />
			</div>
		);
	}
}

export default class TreeCtrl extends TreeCtrlRender {}
