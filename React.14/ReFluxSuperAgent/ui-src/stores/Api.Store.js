import Reflux from 'reflux';

import Actions from '../actions/api.Actions';
import ApiFct from '../utils/sa.api';

let ApiStoreObject = {
	newData: {
		"React version": "0.14",
		"Project": "ReFluxSuperAgent",
		"currentDateTime": new Date().toLocaleString()
	},
	listenables: Actions,
	apiInit() { ApiFct.setData(this.newData); },
	apiInitDone() { ApiFct.getData(); },
	apiSetData(data) { ApiFct.setData(data); }
}
const ApiStore = Reflux.createStore(ApiStoreObject);
export default ApiStore;
