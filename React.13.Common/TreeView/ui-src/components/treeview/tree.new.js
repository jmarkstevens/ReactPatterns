import React, {Component} from 'react';

import TreeDetail from './tree.detail';
import Actions from '../../flux/Actions';
import JButton from '../common/jButton';

var newBeforeBtn = { buttonid: "before", text: "New Before" };
var newAfterBtn = { buttonid: "after", text: "New After" };
var newChildBtn = { buttonid: "child", text: "New Child" };
var cancelNewBtn = { buttonid: "cancel", text: "Cancel" };

class TreeNewRender extends Component {
	binder(...methods) { methods.forEach( (method) => this[method] = this[method].bind(this) ); }

 	render() {
		var newStyle = {};
		if (!this.props.visable) { newStyle.display = "none"; }
		return (
			<div className="treeNewEdit" style={newStyle}>
				<div className="buttonArea">
					<div className="halfNewButtonArea">
						<div className="topButtonArea">
							<JButton btn={newBeforeBtn} parentClickHandler={this.clickHandler} />
							<JButton btn={newAfterBtn} parentClickHandler={this.clickHandler} />
						</div>
						<div className="bottomButtonArea">
							<JButton btn={newChildBtn} parentClickHandler={this.clickHandler} />
							<JButton btn={cancelNewBtn} parentClickHandler={this.clickHandler} />
						</div>
					</div>
				</div>
				<TreeDetail treeNode={this.state.treeNode} handleChange={this.handleChange} />
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
	handleChange(event, field) {
		var node = this.state.treeNode;
		if (field == 'title') node.title = event.target.value;
		this.setState({ treeNode: node });
	}
}

