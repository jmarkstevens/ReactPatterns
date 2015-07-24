import Reflux from 'reflux';

import Actions from './Actions';

var _appState = {currentPage: 'home'};

function _appActions(action) {
	switch (action) {
		case 'home':
		case 'about': _appState.currentPage = action; AppStore.trigger(); break;
	}
}

function _appStoreInit() {
	this.listenTo(Actions.appActions, this.onAppActions);
}

var AppStoreObject = {
	init: _appStoreInit,
	onAppActions: _appActions,

	getAppState: function() { return _appState; }
}

const AppStore = Reflux.createStore(AppStoreObject);
export default AppStore;
