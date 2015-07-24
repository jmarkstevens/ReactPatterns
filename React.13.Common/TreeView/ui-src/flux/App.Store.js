import Reflux from 'reflux';

import Actions from './Actions';
import ApiFct from '../utils/ws.api.js';

var _storeData = {};

function _gotAppStore(data) { _storeData = data; }

function _setStoreData() { ApiFct.setAppStoreData(_storeData); }

function _getSetNextNodeID() {
	var nextID = _storeData.nextid;
	_storeData.nextid = nextID + 1;
	_setStoreData();
	return nextID;
}

function _appStoreInit() {
	this.listenTo(Actions.gotAppStore, this.onGotAppStore);
}

var AppStoreObject = {
	init: _appStoreInit,
	onGotAppStore: _gotAppStore,

	getSetNextNodeID: _getSetNextNodeID
}
const AppStore = Reflux.createStore(AppStoreObject);
export default AppStore;
