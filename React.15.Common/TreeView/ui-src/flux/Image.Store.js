import Reflux from 'reflux';

import Actions from './Actions';

let ImageStoreObject = {
	imageList: [],
	init() { this.listenTo(Actions.gotImageList, this.onGotImageList); },
	onGotImageList(data) {
		this.imageList = data;
		ImageStore.trigger();
	},

	getImageList() { return this.imageList; }
}
const ImageStore = Reflux.createStore(ImageStoreObject);
export default ImageStore;
