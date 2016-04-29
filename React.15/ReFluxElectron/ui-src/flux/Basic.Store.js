import Reflux from 'reflux';

import Actions from './Actions';

var BasicStoreObject = {
	data1: {},
	init() { this.listenTo(Actions.gotData, this.onGotData); },
	onGotData(data) { this.data1 = data; BasicStore.trigger(); },

	getData() { return this.data1; }
}
const BasicStore = Reflux.createStore(BasicStoreObject);
export default BasicStore;
