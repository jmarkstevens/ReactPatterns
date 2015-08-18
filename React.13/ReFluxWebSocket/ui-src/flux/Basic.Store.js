import Reflux from 'reflux';

import Actions from './Actions';
import AddonStore from './Addon.Store';
import MixinStoreObject from './Mixin.Store';

var _data = {};

function _gotData(data) { _data = data; BasicStore.trigger(); }
function _addonTrigger() { BasicStore.trigger(); }

function BasicStoreInit() { this.listenTo(AddonStore, this.onAddonTrigger); }

var BasicStoreObject = {
	init: BasicStoreInit,
	listenables: Actions,
	mixins: [MixinStoreObject],
	onGotData: _gotData,
	onAddonTrigger: _addonTrigger,
	getData: function() { return _data; },
	getData2: function() { return AddonStore.data2; },
	getData3: function() { return this.data3; }
}
const BasicStore = Reflux.createStore(BasicStoreObject);
export default BasicStore;
