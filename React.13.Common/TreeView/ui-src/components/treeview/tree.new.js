import React, {Component} from 'react';

import TreeDetail from './tree.detail';
import Actions from '../../flux/Actions';
import JButton from '../common/jButton';

var newBeforeBtn = { buttonid: "before", text: "New Before", assignStyle: {width: '92px'} };
var newAfterBtn = { buttonid: "after", text: "New After", assignStyle: {width: '92px'} };
var newChildBtn = { buttonid: "child", text: "New Child", assignStyle: {width: '92px'} };
var cancelNewBtn = { buttonid: "cancel", text: "Cancel", assignStyle: {width: '92px'} };

class TreeNewRender extends Component {
	binder(...methods) { methods.forEach( (method) => this[method] = this[method].bind(this) ); }

 	render() {
		if (this.props.hide) return null;
		return (
			<div id="treeNewEdit">
				<div id="buttonArea">
					<div id="halfNewButtonArea">
						<div id="topButtonArea">
							<JButton btn={newBeforeBtn} parentClickHandler={this.clickHandler} />
							<JButton btn={newAfterBtn} parentClickHandler={this.clickHandler} />
						</div>
						<div id="bottomButtonArea">
							<JButton btn={newChildBtn} parentClickHandler={this.clickHandler} />
							<JButton btn={cancelNewBtn} parentClickHandler={this.clickHandler} />
						</div>
					</div>
				</div>
				<TreeDetail treeNode={this.state.treeNode} name='newNode' handleChange={this.handleChange} />
			</div>
		);
	}
}

export default class TreeNew extends TreeNewRender {
	constructor() {
	  super();
		this.state = { treeNode: { nodeid: '', title: '', type: 'dev', selected: false, children: [] }};
	  this.binder('clickHandler', 'handleChange');
	}
	clickHandler(buttonid) {
		switch (buttonid) {
			case 'before':
			case 'after':
			case 'child': Actions.saveTreeNew(this.state.treeNode, buttonid); break;
			case 'cancel': Actions.treeActions('cancelNew'); break;
		}
	}
	handleChange(field, value) {
		var node = this.state.treeNode;
		if (field == 'title') node.title = value;
		if (field == 'type') node.type = value;
		this.setState({ treeNode: node });
	}
}
