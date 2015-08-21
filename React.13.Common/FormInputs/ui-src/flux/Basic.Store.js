import Reflux from 'reflux';
import lodash from 'lodash';

import Actions from './Actions';

var _data = {
	"text": "Dev and the title",
	"checkbox": true,
	"radioGroup": "setkey",
	"color": "#1A3212",
	"number": 25,
	"range": 45
};

function _gotData(data) { _data = data; BasicStore.trigger(); }
function _setData() { Actions.apiSetData(_data); }

function _editRecord(field, value) {
	var record = lodash.clone(_data);
	switch (field) {
		case 'text': record.text = value; break;
		case 'checkbox': record.checkbox = value; break;
		case 'radioGroup': record.radioGroup = value; break;
		case 'color': record.color = value; break;
		case 'number': record.number = value; break;
		case 'range': record.range = value; break;
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
