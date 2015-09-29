import Reflux from 'reflux';

import Actions from './Actions';
import AddonStore from './Addon.Store';
import MixinStoreObject from './Mixin.Store';

let BasicStoreObject = {
	init() { this.listenTo(AddonStore, this.onAddonTrigger); },
	data1: {},
	listenables: Actions,
	mixins: [MixinStoreObject],
	onGotData1(data) { this.data1 = data; BasicStore.trigger('data1'); },
	onAddonTrigger() { BasicStore.trigger('data2'); },
	getData1() { return this.data1; },
	getData2() { return AddonStore.data2; },
	getData3() { return this.data3; }
}
const BasicStore = Reflux.createStore(BasicStoreObject);
export default BasicStore;
