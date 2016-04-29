import Reflux from 'reflux';

import Actions from '../actions/api.Actions';
import ApiFct from '../utils/sa.api';

let ApiStoreObject = {
  listenables: Actions,
  apiInit() { ApiFct.getPicList(); }
};
const ApiStore = Reflux.createStore(ApiStoreObject);
export default ApiStore;
