import flux from 'flux-react';

import Actions from './Actions';
import MixinStore from './Mixin.Store'

var _basicStoreData = {data1: {}};

var _basicStoreExports = {getData: function() { return this.data1; }};

var _basicStoreActions = [Actions.gotData];
function _gotData(data) { this.data1 = data; this.emit('gotData1'); }

function _setData() { Actions.apiSetData(this.data1); }

var BasicStoreObject = {
	mixins: [_basicStoreData, MixinStore],
	exports: _basicStoreExports,
	actions: _basicStoreActions,
	gotData: _gotData
}
const BasicStore = flux.createStore(BasicStoreObject);
export default BasicStore;
