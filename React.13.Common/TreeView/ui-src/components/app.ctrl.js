import React, {Component} from 'react';

import GenusCtrl from './genus/genus.ctrl';
import JumpCtrl from './jumplist/jump.ctrl';
import TreeCtrl from './treeview/tree.ctrl';

import GenusStore from '../flux/Genus.Store';
import ImageStore from '../flux/Image.Store';
import TreeViewStore from '../flux/TreeView.Store';


var AppCtrlSty = {
	height: '100%',
	padding: '0 10px 0 0'
}

var TreeCtrlSty = {
	border: 'solid 1px darkslategrey',
	height: 'calc(100% - 10px)',
	overflow: 'auto',
	paddingLeft: '0',
	width: '33%'
}
var getAllState = function() {
	return {
		genusList: GenusStore.getGenusList(),
		currentGenusNode: GenusStore.getCurrentGenusNode(),
		imageList: ImageStore.getImageList(),
		currentImageItem: 'empty',
		treeData: TreeViewStore.getTreeData(),
		currentTreeNode: TreeViewStore.getCurrentTreeNode(),
		showTreeEdit: TreeViewStore.getShowTreeEdit(),
		showTreeNew: TreeViewStore.getShowTreeNew()
	}
}

var getGenusState = function() {
	return {
		genusList: GenusStore.getGenusList(),
		currentGenusNode: GenusStore.getCurrentGenusNode()
	};
};

var getImageState = function() {
	return {
		imageList: ImageStore.getImageList(),
	};
};

var getTreeState = function() {
	return {
		treeData: TreeViewStore.getTreeData(),
		currentTreeNode: TreeViewStore.getCurrentTreeNode(),
		showTreeEdit: TreeViewStore.getShowTreeEdit(),
		showTreeNew: TreeViewStore.getShowTreeNew()
	};
};

class AppCtrlRender extends Component {
	binder(...methods) { methods.forEach( (method) => this[method] = this[method].bind(this) ); }

	render() {
		var currentTreeNode = this.state.currentTreeNode.title;
		var currentGenusNode = this.state.currentGenusNode.title;
		var currentImageItem = this.state.currentImageItem.title;
		return (
			<div id='AppCtrlSty' className='FlexBox' style={AppCtrlSty}>
				<div id='TreeCtrlSty' style={TreeCtrlSty}>
					current node: {currentTreeNode}
					<br/>
					<TreeCtrl 
						treeData={this.state.treeData} 
						currentTreeNode={this.state.currentTreeNode} 
						showTreeEdit={this.state.showTreeEdit} 
						showTreeNew={this.state.showTreeNew} />
				</div>
				<div id='GenusCtrlSty' style={TreeCtrlSty}>
					current node: {currentGenusNode}
					<br/>
					<GenusCtrl genusList={this.state.genusList} />
				</div>
				<div id='JumpListSty' style={TreeCtrlSty}>
					current node: {currentImageItem}
					<br/>
					<JumpCtrl imageList={this.state.imageList} clickHandler={this.jumpclick}  />
				</div>
			</div>
		);
	}
}

export default class AppCtrl extends AppCtrlRender {
	constructor() { 
	  super();
		this.state = getAllState(); 
	  this.binder('imStoreDidChange', 'gsStoreDidChange', 'tvStoreDidChange', 'jumpclick');
	}
	componentDidMount() {
		this.unsubscribeIM = ImageStore.listen(this.imStoreDidChange);
		this.unsubscribeGS = GenusStore.listen(this.gsStoreDidChange);
		this.unsubscribeTV = TreeViewStore.listen(this.tvStoreDidChange);
	}
	componentWillUnmount() { this.unsubscribeIM(); this.unsubscribeGS(); this.unsubscribeTV(); }
	jumpclick(node) { this.setState({currentImageItem: node});}
	imStoreDidChange() { this.setState(getImageState()); }
	gsStoreDidChange() { this.setState(getGenusState()); }
	tvStoreDidChange() { this.setState(getTreeState()); }
}


