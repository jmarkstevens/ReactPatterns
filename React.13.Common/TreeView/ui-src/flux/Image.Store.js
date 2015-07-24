import Reflux from 'reflux';

import Actions from './Actions';

var _imageList = [];
var _currentGenus = { list: [], item: {}, index: -1, count: 0 };
var _currentSpecies = { list: [], item: {}, index: -1, count: 0 };
var _currentParts = { list: [], item: {}, index: -1, count: 0 };
var _currentItem = {children: []};
var _currentInfo = { genus: {}, specie: {}, onlyone: false };
var _currentJumpLevel = 0;
var _currentJumpNode = {};

function _gotImageList(data) {
	_imageList = data;
	_currentGenus.list = data;
	_currentGenus.count = data.length;
	ImageStore.trigger();
}

function _genusSelected(item, index) {
	_currentItem = item;
	_currentGenus.item = item;
	_currentGenus.index = index;
	_currentSpecies.list = item.children;
	_currentSpecies.count = _currentSpecies.list.length;
	_currentSpecies.index = -1;
	_currentParts.list = [];
	_currentParts.index = -1;
	if (_currentJumpLevel == 0 || _currentJumpLevel == 1) {
		_currentJumpLevel = 0;
		ImageStore.trigger();
	} else {
		var selectedSpecie = _currentSpecies.list[_currentJumpNode.speciesIndex];
		Actions.selectSpecie(selectedSpecie, _currentJumpNode.speciesIndex);
	}
}

function _specieSelected(item, index) {
	_currentItem = item;
	_currentSpecies.item = item;
	_currentSpecies.index = index;
	_currentParts.list = item.children;
	_currentParts.count = item.children.length;
	_currentParts.index = -1;
	if (_currentJumpLevel == 0 || _currentJumpLevel == 2) {
		_currentJumpLevel = 0;
		ImageStore.trigger();
	} else {
		Actions.selectPart(_currentJumpNode, _currentJumpNode.speciesPartIndex, _currentParts.list);
	}
}

function _partSelected(item, index, children) {
	_currentItem = item;
	_currentItem.children = _currentJumpLevel == 3 ? children : _currentSpecies.item.children;
	_currentParts.item = item;
	_currentParts.index = index;
	_currentJumpLevel = 0;
	ImageStore.trigger();
}

function _selectJumpNode(node) {
	_currentJumpLevel = node.nodeLevel;
	_currentJumpNode = node;
	Actions.selectGenus(_currentGenus.list[node.genusIndex], node.genusIndex);
	return;
}

function _storeInit() {
	this.listenTo(Actions.gotImageList, this.onGotImageList);
	this.listenTo(Actions.selectGenus, this.onSelectGenus);
	this.listenTo(Actions.selectSpecie, this.onSelectSpecie);
	this.listenTo(Actions.selectPart, this.onSelectPart);
	this.listenTo(Actions.selectJumpNode, this.onSelectJumpNode);
}

var ImageStoreObject = {
	init: _storeInit,
	onGotImageList: _gotImageList,
	onSelectGenus: _genusSelected,
	onSelectSpecie: _specieSelected,
	onSelectPart: _partSelected,
	onSelectJumpNode: _selectJumpNode,

	getCurrentItem: function() { return _currentItem; },
	getImageList: function() { return _imageList; }
}
const ImageStore = Reflux.createStore(ImageStoreObject);
export default ImageStore;
