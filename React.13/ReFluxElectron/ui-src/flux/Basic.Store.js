import Reflux from 'reflux';

import Actions from './Actions';

var _data = [];

function _gotData(data) { _data = data; BasicStore.trigger(); }
function _setData() { Actions.apiSetData(_data); }

function _basicStoreInit() { this.listenTo(Actions.gotData, this.onGotData); }

var BasicStoreObject = {
	init: _basicStoreInit,
	onGotData: _gotData,

	getData: function() { return _data; }
}
const BasicStore = Reflux.createStore(BasicStoreObject);
export default BasicStore;
