import React from 'react';

import Actions from '../../flux/Actions';
import TreeView from './../common/jTreeView';

class TreeListRender extends React.Component {
	render() {
		let options = {
			icon: {sun: 'dev', leaf: 'home', snow: 'sys'},
			typeName: ['node', 'type']
		};
		return (
			<div>
				<TreeView
					data={this.props.data}
					options={options}
					iconClick={this.iconHandler}
					titleClick={this.clickHandler}
				/>
			</div>
		);
	}
}

export default class TreeList extends TreeListRender {
	iconHandler = (node) => { Actions.setTreeNodeClosed(node); }
	clickHandler = (node) => { Actions.selectTreeNode(node); }
}
