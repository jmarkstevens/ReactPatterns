import Reflux from 'reflux';
import lodash from 'lodash';

import Actions from './Actions';
import ApiFct from '../utils/ws.api.js';

var _data = {};

function _gotData(data) { _data = data; BasicStore.trigger(); }
function _setData() { ApiFct.setData(_data); }

function _editRecord(field, value) {
	var record = lodash.clone(_data);
	switch (field) {
		case 'nodeid': record.nodeid = value; break;
		case 'title': record.title = value; break;
		case 'type': record.type = value; break;
		case 'selected': record.selected = value; break;
		case 'closed': record.closed = value; break;
		case 'radio2': record.radio2 = value; break;
	}
	_data = record;
	BasicStore.trigger();
	_setData();
}

function _basicStoreInit() {
	this.listenTo(Actions.gotData, this.onGotData);
	this.listenTo(Actions.editRecord, this.onEditRecord);
}

var BasicStoreObject = {
	init: _basicStoreInit,
	onGotData: _gotData,
	onEditRecord: _editRecord,

	getData: function() { return _data; }
}
const BasicStore = Reflux.createStore(BasicStoreObject);
export default BasicStore;
