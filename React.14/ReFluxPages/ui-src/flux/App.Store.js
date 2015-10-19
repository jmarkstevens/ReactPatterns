import Reflux from 'reflux';

import Actions from './Actions';

let AppStoreObject = {
	appState: {currentPage: 'home'},
	init() { this.listenTo(Actions.appActions, this.onAppActions); },
	onAppActions(action) {
		switch (action) {
			case 'home':
			case 'about': this.appState.currentPage = action; AppStore.trigger(); break;
		}
	},

	getAppState() { return this.appState; }
}

const AppStore = Reflux.createStore(AppStoreObject);
export default AppStore;
