import Reflux from 'reflux';

import Actions from '../actions/sa.Actions';

let AppStoreObject = {
  data1: [],
  listenables: Actions,
  gotPicList: _GotPicList,
  getData() { return this.data1; }
};
const AppStore = Reflux.createStore(AppStoreObject);
export default AppStore;

function _GotPicList(data) {
  this.data1 = data.returnList;
  AppStore.trigger('gotData');
}
