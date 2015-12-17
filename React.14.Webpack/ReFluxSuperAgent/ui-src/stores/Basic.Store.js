import Reflux from 'reflux';

import Actions from '../actions/sa.Actions';
import AddonStore from './Addon.Store';
import MixinStoreObject from './Mixin.Store';

function _GotData(data) { this.data1 = data; BasicStore.trigger('data1'); }

let BasicStoreObject = {
  init() { this.listenTo(AddonStore, this.onAddonTrigger); },
  data1: {},
  listenables: Actions,
  mixins: [MixinStoreObject],
  onGotData1: _GotData,
  onAddonTrigger() { BasicStore.trigger('data2'); },
  getData1() { return this.data1; },
  getData2() { return AddonStore.data2; },
  getData3() { return this.data3; }
}
const BasicStore = Reflux.createStore(BasicStoreObject);
export default BasicStore;
