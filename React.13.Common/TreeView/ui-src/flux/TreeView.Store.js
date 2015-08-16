import lodash from 'lodash';
import Reflux from 'reflux';
import traverse from 'traverse';

import Actions from './Actions';
import ApiFct from '../utils/ws.api.js';

import AppStore from './App.Store';

var _treeData = [];
var _currentTreeNode = {};
var _showTreeEdit = false;
var _showTreeNew = false;

function _gotTreeView(treedata) {
	_treeData = treedata;
	_currentTreeNode = _getSelected(treedata);
	if (_currentTreeNode == null) _currentTreeNode = treedata[0];
	TreeViewStore.trigger();
}

function _setTreeData() { ApiFct.setTreeView(_treeData); }

function _getSelected(tree) {
	var result = null;
	lodash.each(tree, function(node) {
		if (node.selected) result = node;
		if(result == null && node.children.length > 0) result = _getSelected(node.children);
	});
	return result;
}

function _treeActions(action) {
	switch (action) {
		case 'new': _showTreeNew = true; TreeViewStore.trigger(); break;
		case 'edit': _showTreeEdit = true; TreeViewStore.trigger(); break;
		case 'moveUp':
		case 'moveDown':
		case 'remove': _moveTreeItem(action); break;
		case 'cancelEdit': _showTreeEdit = false; TreeViewStore.trigger(); break;
		case 'cancelNew': _showTreeNew = false; TreeViewStore.trigger(); break;
	}
}

function _saveTreeNew(treeNode, location) {
	var newNode = treeNode;
	var nodeIndex = _getNodeIndex(_currentTreeNode);
	var nextNodeID = SnipsStore.getSetNextNodeID();
	var newNodeID;
	if (location == 'child') {
		newNodeID = _currentTreeNode.nodeid + '.' + nextNodeID;
	} else {
		var nodeIdArray = _currentTreeNode.nodeid.split(".");
		nodeIdArray.pop();
		newNodeID = nodeIdArray.join('.') + '.' + nextNodeID;
	}
	newNode.nodeid = newNodeID;
	SnipsStore.newTreeNode(newNodeID);

	var tIndex;
	var children;
	var isNotRoot = (nodeIndex.length > 1);
	if (location == 'child') {
		var nodeIndex2 = _getNodeIndex(_currentTreeNode);
		nodeIndex2.push('closed');
		traverse(_treeData).set(nodeIndex2, false);
		nodeIndex.push('children');
		children = traverse(_treeData).get(nodeIndex);
		isNotRoot = true;
	} else if (isNotRoot) {
		tIndex = nodeIndex.pop();
		children = traverse(_treeData).get(nodeIndex);
	} else {
		tIndex = nodeIndex[0];
		children = _treeData;
	}
	switch (location) {
		case 'before': break;
		case 'after': var cLength = children.length;
			tIndex = tIndex < cLength ? tIndex + 1 : cLength;
			break;
		case 'child': tIndex = 0; break;
	}
	children.splice(tIndex, 0, lodash.clone(newNode));
	if (isNotRoot) traverse(_treeData).set(nodeIndex, children);
	else _treeData = children;
	_treeData = lodash.cloneDeep(_treeData);
	_showTreeNew = false;
	Actions.selectTreeNode(newNode);
}

function _saveTreeEdit(treeNode) {
	var nodeIndex = _getNodeIndex(treeNode);
	traverse(_treeData).set(nodeIndex, lodash.clone(treeNode));
	_showTreeEdit = false;
	TreeViewStore.trigger();
	_setTreeData();
}

function _moveTreeItem(action) {
	var nodeIndex = _getNodeIndex(_currentTreeNode);
	var tIndex;
	var children;
	var isNotRoot = (nodeIndex.length > 1);
	if (isNotRoot) {
		tIndex = nodeIndex.pop();
		children = traverse(_treeData).get(nodeIndex);
	}
	else {
		tIndex = nodeIndex[0];
		children = _treeData;
	}
	var currentIndex = tIndex;
	switch (action) {
		case 'moveUp': tIndex = tIndex > 0 ? tIndex - 1 : 0; break;
		case 'moveDown': var cLength = children.length;
			tIndex = tIndex < cLength ? tIndex + 1 : cLength;
			break;
		case 'remove': tIndex = tIndex > 0 ? tIndex - 1 : 0; break;
	}
	if (tIndex != currentIndex || action == 'remove') {
		var data = children.splice(currentIndex, 1);
		if (action == 'remove') {
			var newNode = children[tIndex];
			if (newNode != null) _setCurrentTreeNode(newNode);
			SnipsStore.removeTreeNode(_currentTreeNode.nodeid);
		}
		else children.splice(tIndex, 0, data[0]);
		if (isNotRoot) traverse(_treeData).set(nodeIndex, children);
		else _treeData = children;
		TreeViewStore.trigger();
		_setTreeData();
	}
}

function _getNodeIndex(treeNode) {
	var treeData = _treeData;
	var nodeID = treeNode.nodeid;
	if (lodash.isEmpty(nodeID)) { return []; }

	var nodeIdArray = nodeID.split("."),
		searchID = nodeIdArray.shift(),
		nodeIndex = [],
		index,
		nextSearchID;

	while (searchID) {
		if (!treeData) { return []; }
		var treeItem = lodash.findWhere(treeData, {nodeid: searchID});
		index = lodash.indexOf(treeData, treeItem);
		if (index < 0) { return []; }
		nodeIndex.push(index);
		nextSearchID = nodeIdArray.shift();
		if (nextSearchID) {
			searchID += '.' + nextSearchID;
			treeData = treeData[index].children;
			if (treeData) { nodeIndex.push("children"); }
		}
		else searchID = nextSearchID;
	}

	return nodeIndex;
}

function _selectTreeNode(treeNode) {
	var nodeIndex1 = _getNodeIndex(_currentTreeNode);
	nodeIndex1.push('selected');
	traverse(_treeData).set(nodeIndex1, false);
	_currentTreeNode = treeNode;
	var nodeIndex2 = _getNodeIndex(_currentTreeNode);
	nodeIndex2.push('selected');
	traverse(_treeData).set(nodeIndex2, true);

	TreeViewStore.trigger();
	_setTreeData();
}

function _setTreeNodeClosed(treeNode) {
	var nodeIndex = _getNodeIndex(treeNode);
	nodeIndex.push('closed');
	var visible = traverse(_treeData).get(nodeIndex);
	if (typeof visible === 'undefined') visible = false;
	else visible = !visible;
	if (visible) traverse(_treeData).set(nodeIndex, true);
	else traverse(_treeData).set(nodeIndex, false);

	TreeViewStore.trigger();
	_setTreeData();
}

function _treeViewStoreInit() {
	this.listenTo(Actions.gotTreeView, this.onGotTreeView);

	this.listenTo(Actions.selectTreeNode, this.onSelectTreeNode);
	this.listenTo(Actions.setTreeNodeClosed, this.onSetTreeNodeClosed);
	this.listenTo(Actions.treeActions, this.onTreeActions);
	this.listenTo(Actions.saveTreeEdit, this.onSaveTreeEdit);
	this.listenTo(Actions.saveTreeNew, this.onSaveTreeNew);
}

var TreeViewStoreObject = {
	init: _treeViewStoreInit,
	onGotTreeView: _gotTreeView,
	onSelectTreeNode: _selectTreeNode,
	onSetTreeNodeClosed: _setTreeNodeClosed,
	onTreeActions: _treeActions,
	onSaveTreeEdit: _saveTreeEdit,
	onSaveTreeNew: _saveTreeNew,

	getTreeData: function() { return _treeData; },
	getCurrentTreeNode: function() { return _currentTreeNode; },
	getShowTreeEdit: function() { return _showTreeEdit; },
	getShowTreeNew: function() { return _showTreeNew; }
}
const TreeViewStore = Reflux.createStore(TreeViewStoreObject);
export default TreeViewStore;
