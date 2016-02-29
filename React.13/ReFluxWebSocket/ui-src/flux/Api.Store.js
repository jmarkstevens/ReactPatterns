import Reflux from 'reflux';

import Actions from './Actions';
import ApiFct from './../utils/ws.api.js';

function _apiInit() { ApiFct.init(); }
function _apiInitDone() { ApiFct.getData(); }
function _apiSetData(data) { ApiFct.setData(data); }

var ApiStoreObject = {
	listenables: Actions,
	apiInit: _apiInit,
	apiInitDone: _apiInitDone,
	apiSetData: _apiSetData
}
const ApiStore = Reflux.createStore(ApiStoreObject);
export default ApiStore;
