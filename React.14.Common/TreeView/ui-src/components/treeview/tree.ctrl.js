import React from 'react';

import TreeList from './tree.list';
import TreeMenu from './tree.menu';
import TreeEdit from './tree.edit';
import TreeNew from './tree.new';

let TreeCtrlRenderSty = { height: 'calc(100% - 19px)'};

export default class TreeCtrl extends React.Component {
 	render() {
    let hideTreeEdit = !this.props.showTreeEdit;
    let hideTreeNew = !this.props.showTreeNew;
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
