import Reflux from 'reflux';

import Actions from './Actions';
import WsApi from './../utils/ws.api.js';

function _apiInit() { WsApi.init(); }
function _apiInitDone() { WsApi.getData(); }
function _apiSetData(data) { WsApi.setData(data); }

var ApiStoreObject = {
	listenables: Actions,
	onApiInit: _apiInit,
	onApiInitDone: _apiInitDone,
	onApiSetData: _apiSetData
}
const ApiStore = Reflux.createStore(ApiStoreObject);
export default ApiStore;
