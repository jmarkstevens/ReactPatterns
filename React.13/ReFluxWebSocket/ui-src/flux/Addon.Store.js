import Reflux from 'reflux';

import Actions from './Actions';

function _gotData2(data) { this.data2 = data; AddonStore.trigger(); }

var AddonStoreObject = {
	data2: {},
	listenables: Actions,
	onGotData2: _gotData2
}
const AddonStore = Reflux.createStore(AddonStoreObject);
export default AddonStore;
