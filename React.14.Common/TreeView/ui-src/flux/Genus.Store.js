import lodash from 'lodash';
import Reflux from 'reflux';

import Actions from './Actions';

let _genusList = [];
let _currentGenusNode = {};

function _gotGenusList(data) {
	_genusList = data;
	_currentGenusNode = _getSelected(_genusList);
	if (_currentGenusNode == null) _currentGenusNode = _genusList[0];
	GenusStore.trigger();
}
function _setGenusList() { Actions.apiSetGenusList(_genusList); }

function _selectGenusNode(node) {
	if (_currentGenusNode.type == 'specie') {
		let genus = lodash.findWhere(_genusList, {title: _currentGenusNode.genus});
		let genusIndex = lodash.indexOf(_genusList, genus);
		let child = lodash.findWhere(genus.children, {nodeid: _currentGenusNode.nodeid});
		let childIndex = lodash.indexOf(genus.children, child);
		_genusList[genusIndex].children[childIndex].selected = false;
	} else {
		let genusNodeIndex = lodash.indexOf(_genusList, _currentGenusNode);
		_genusList[genusNodeIndex].selected = false;
	}

	_currentGenusNode = node;
	if (_currentGenusNode.type == 'specie') {
		let genus = lodash.findWhere(_genusList, {title: _currentGenusNode.genus});
		let genusIndex = lodash.indexOf(_genusList, genus);
		let child = lodash.findWhere(genus.children, {nodeid: _currentGenusNode.nodeid});
		let childIndex = lodash.indexOf(genus.children, child);
		_genusList[genusIndex].children[childIndex].selected = true;
	} else {
		let genusNodeIndex = lodash.indexOf(_genusList, _currentGenusNode);
		_genusList[genusNodeIndex].selected = true;
	}

	GenusStore.trigger();
	_setGenusList();
}

function _setGenusNodeClosed(node) {
	let selectedNode = lodash.findWhere(_genusList, {nodeid: node.nodeid});
	let selectedNodeIndex = lodash.indexOf(_genusList, selectedNode);
	let isClosed;
	if (lodash.has(_genusList[selectedNodeIndex], "closed")) isClosed = _genusList[selectedNodeIndex].closed;
	else isClosed = true;
	_genusList[selectedNodeIndex].closed = !isClosed;

	GenusStore.trigger();
	_setGenusList();
}

function _getSelected(tree) {
	let result = null;
	lodash.each(tree, function(item) {
		if (item.selected) result = item;
		if(result == null && lodash.has(item, "children") && item.children.length > 0)
			result = _getSelected(item.children);
	});
	return result;
}

function _genusStoreInit() {
	this.listenTo(Actions.gotGenusList, this.onGotGenusList);
	this.listenTo(Actions.selectGenusNode, this.onSelectGenusNode);
	this.listenTo(Actions.setGenusNodeClosed, this.onSetGenusNodeClosed);
}

var GenusStoreObject = {
	init: _genusStoreInit,
	onGotGenusList: _gotGenusList,
	onSelectGenusNode: _selectGenusNode,
	onSetGenusNodeClosed: _setGenusNodeClosed,

	getGenusList() { return _genusList; },
	getCurrentGenusNode() { return _currentGenusNode; }
}
const GenusStore = Reflux.createStore(GenusStoreObject);
export default GenusStore;
