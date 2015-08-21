import Reflux from 'reflux';

import Actions from './Actions';

var _imageList = [];

function _gotImageList(data) {
	_imageList = data;
	ImageStore.trigger();
}

function _storeInit() {
	this.listenTo(Actions.gotImageList, this.onGotImageList);
}

var ImageStoreObject = {
	init: _storeInit,
	onGotImageList: _gotImageList,

	getImageList: function() { return _imageList; }
}
const ImageStore = Reflux.createStore(ImageStoreObject);
export default ImageStore;
