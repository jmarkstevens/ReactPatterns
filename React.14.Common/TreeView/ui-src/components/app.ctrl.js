import React from 'react';

import GenusCtrl from './genus/genus.ctrl';
import JumpCtrl from './jumplist/jump.ctrl';
import TreeCtrl from './treeview/tree.ctrl';

import GenusStore from '../flux/Genus.Store';
import ImageStore from '../flux/Image.Store';
import TreeViewStore from '../flux/TreeView.Store';


let AppCtrlSty = {
	height: '100%',
	padding: '0 10px 0 0'
}

let TreeCtrlSty = {
	border: 'solid 1px darkslategrey',
	height: 'calc(100% - 10px)',
	overflow: 'auto',
	paddingLeft: '0',
	width: '33%'
}
let getAllState = function() {
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

let getGenusState = function() {
	return {
		genusList: GenusStore.getGenusList(),
		currentGenusNode: GenusStore.getCurrentGenusNode()
	};
};

let getImageState = function() {
	return {
		imageList: ImageStore.getImageList(),
	};
};

let getTreeState = function() {
	return {
		treeData: TreeViewStore.getTreeData(),
		currentTreeNode: TreeViewStore.getCurrentTreeNode(),
		showTreeEdit: TreeViewStore.getShowTreeEdit(),
		showTreeNew: TreeViewStore.getShowTreeNew()
	};
};

class AppCtrlRender extends React.Component {
	render() {
		let currentTreeNode = this.state.currentTreeNode.title;
		let currentGenusNode = this.state.currentGenusNode.title;
		let currentImageItem = this.state.currentImageItem.title;
		return (
			<div id='AppCtrlSty' style={AppCtrlSty}>
				React 1.3 TreeView<br/><br/>
				<div id='treeColumns' className='FlexBox' style={{height: 'calc(100% - 34px)'}}>
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
			</div>
		);
	}
}

export default class AppCtrl extends AppCtrlRender {
	constructor() {
	  super();
		this.state = getAllState();
	}
	componentDidMount = () => {
		this.unsubscribeIM = ImageStore.listen(this.imStoreDidChange);
		this.unsubscribeGS = GenusStore.listen(this.gsStoreDidChange);
		this.unsubscribeTV = TreeViewStore.listen(this.tvStoreDidChange);
	}
	componentWillUnmount = () => { this.unsubscribeIM(); this.unsubscribeGS(); this.unsubscribeTV(); }
	jumpclick = (node) => { this.setState({currentImageItem: node});}
	imStoreDidChange = () => { this.setState(getImageState()); }
	gsStoreDidChange = () => { this.setState(getGenusState()); }
	tvStoreDidChange = () => { this.setState(getTreeState()); }
}
