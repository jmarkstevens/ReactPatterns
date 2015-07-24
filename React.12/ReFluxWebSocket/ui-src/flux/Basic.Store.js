var apiFct = require('../utils/ws.api.js');
var Reflux = require('reflux');
var Actions = require('./Actions');

var _data = {};

function _gotData(data) {
	_data = data;
	BasicStore.trigger();
}
function _setData() { apiFct.setData(_data); }

function _basicStoreInit() {
	this.listenTo(Actions.gotData, this.onGotData);
}

var BasicStoreObject = {
	init: _basicStoreInit,
	onGotData: _gotData,

	getData: function() { return _data; }
}

var BasicStore = Reflux.createStore(BasicStoreObject);
module.exports = BasicStore;
