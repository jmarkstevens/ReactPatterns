import Reflux from 'reflux';

import Actions from './Actions';

let AddonStoreObject = {
	data2: {},
	listenables: Actions,
	onGotData3(data) { this.data2 = data; AddonStore.trigger(); }
}
const AddonStore = Reflux.createStore(AddonStoreObject);
export default AddonStore;
