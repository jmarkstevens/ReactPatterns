import Reflux from 'reflux';

import Actions from './Actions';
import ApiFct from '../utils/ipc.api.js';
// import ApiFct from '../utils/ws.api.js';

function _apiInit() { ApiFct.init(); }
function _apiInitDone() { ApiFct.getData(); }

function _apiGetData() { ApiFct.getData(); }
function _apiSetData(data) { ApiFct.setData(data); }

var ApiStoreObject = {
	listenables: Actions,
	onApiInit: _apiInit,
	onApiInitDone: _apiInitDone,

	apiGetData: _apiGetData,
	apiSetData: _apiSetData
}
const ApiStore = Reflux.createStore(ApiStoreObject);
export default ApiStore;
