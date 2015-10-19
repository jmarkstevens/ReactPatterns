import Reflux from 'reflux';

import Actions from './Actions';

function _setWindowDefaults(navPlatform) {
	let deviceTyped = 'mobile';

	this.newMessage('navPlatform: ' + navPlatform);
	switch (navPlatform) {
		case 'MacIntel':
		case 'Linux x86_64':
		case 'Win32': deviceTyped = 'desktop'; break;
	}
	// deviceTyped = 'mobile';
	this.appData.isMobile = (deviceTyped == 'mobile');
	this.trigger('setWindowDefaults');
}

function _newMessage(message) {
	this.appData.messages.push(message);
	this.trigger('newMessage');
}

const AppStoreObject = {
	appData: {isMobile: false, messages: []},
	listenables: Actions,
	setWindowDefaults: _setWindowDefaults,
	newMessage: _newMessage,
	getAppData() { return this.appData; }
}
const AppStore = Reflux.createStore(AppStoreObject);
export default AppStore;
