import Reflux from 'reflux';

import Actions from './Actions';
import ApiFct from './../utils/ws.api.js';

function _apiInit() { ApiFct.init(); }
function _apiInitDone() { ApiFct.getData(); }
function _apiSetAppStoreData(data) { ApiFct.setAppStoreData(data); }
function _apiSetGenusList(data) { ApiFct.setGenusList(data); }
function _apiTreeView(data) { ApiFct.setTreeView(data); }

var ApiStoreObject = {
	listenables: Actions,
	apiInit: _apiInit,
	apiInitDone: _apiInitDone,
	apiSetAppStoreData: _apiSetAppStoreData,
	apiSetGenusList: _apiSetGenusList,
	apiTreeView: _apiTreeView
}
const ApiStore = Reflux.createStore(ApiStoreObject);
export default ApiStore;
