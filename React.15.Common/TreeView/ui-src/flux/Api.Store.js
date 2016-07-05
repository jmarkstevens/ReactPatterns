import Reflux from 'reflux';

import Actions from './Actions';
import ApiFct from '../utils/sa.api.js';

let ApiStoreObject = {
  listenables: Actions,
  apiInit() {
    ApiFct.getAppStore();
    ApiFct.getImageList();
    ApiFct.getTreeView();
  },
  apiSetAppStoreData(data) { ApiFct.setAppStoreData(data); },
  apiTreeView(data) { ApiFct.setTreeView(data); }
}
const ApiStore = Reflux.createStore(ApiStoreObject);
export default ApiStore;
