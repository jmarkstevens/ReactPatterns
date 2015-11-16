import Reflux from 'reflux';

import Actions from './Actions';
import ApiFct from '../utils/ipc.api.js';

let ApiStoreObject = {
	listenables: Actions,
	onApiInit() { ApiFct.init(); },
	onApiInitDone() { ApiFct.getData(); },

	apiGetData() { ApiFct.getData(); },
	apiSetData(data) { ApiFct.setData(data); }
}
const ApiStore = Reflux.createStore(ApiStoreObject);
export default ApiStore;
