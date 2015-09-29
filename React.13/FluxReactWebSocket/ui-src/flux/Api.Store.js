import flux from 'flux-react';

import Actions from './Actions';
import WsApi from './../utils/ws.api.js';

var _apiStoreActions = [
	Actions.apiInit, 
	Actions.apiGetData,
	Actions.apiSetData
];

const ApiStoreObject = {
	actions: _apiStoreActions,
	apiInit: function() { WsApi.init(); },
	apiGetData: function() { WsApi.getData(); },
	apiSetData: function(data) { WsApi.setData(data); }
}
const ApiStore = flux.createStore(ApiStoreObject);
export default ApiStore;
