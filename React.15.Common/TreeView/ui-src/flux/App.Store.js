import Reflux from 'reflux';

import Actions from './Actions';

let AppStoreObject = {
	storeData: {},
	init() { this.listenTo(Actions.gotAppStore, this.onGotAppStore); },
	onGotAppStore(data) { this.storeData = data; },
	setStoreData() { Actions.apiSetAppStoreData(this.storeData); },
	getSetNextNodeID() {
		let nextID = _storeData.nextid;
		this.storeData.nextid = nextID + 1;
		this.setStoreData();
		return nextID;
	}
}
const AppStore = Reflux.createStore(AppStoreObject);
export default AppStore;
