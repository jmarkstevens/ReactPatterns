import React, {Component} from 'react';

import TreeDetail from './tree.detail';
import Actions from '../../flux/Actions';
import JButton from '../common/jButton';

var saveEditBtn = { buttonid: "save", text: "Save" };
var cancelEditBtn = { buttonid: "cancel", text: "Cancel" };

class TreeEditRender extends Component {
	binder(...methods) { methods.forEach( (method) => this[method] = this[method].bind(this) ); }

 	render() {
		if (this.props.hide) return null;
		return (
			<div id="treeNewEdit">
				<div id="buttonArea">
					<JButton btn={saveEditBtn} parentClickHandler={this.clickHandler} />
					<JButton btn={cancelEditBtn} parentClickHandler={this.clickHandler} />
				</div>
				<TreeDetail treeNode={this.state.treeNode} name='editNode' handleChange={this.handleChange} />
			</div>
		);
	}
}

export default class TreeEdit extends TreeEditRender {
	constructor() {
	  super();
		this.state = { treeNode: { nodeid: '', children: [], title: '', type: '' }};
	  this.binder('clickHandler', 'handleChange');
	}

	clickHandler(buttonid) {
		var node = this.state.treeNode;
		switch (buttonid) {
			case 'save': Actions.saveTreeEdit(node); break;
			case 'cancel': Actions.treeActions('cancelEdit'); break;
		}
	}
	componentWillReceiveProps(nextProps) { this.setState({treeNode: nextProps.treeNode}); }
	handleChange(field, value) {
		var node = this.state.treeNode;
		if (field == 'title') node.title = value;
		if (field == 'type') node.type = value;
		this.setState({ treeNode: node });
	}
}
