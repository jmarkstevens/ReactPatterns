import Reflux from 'reflux';

import Actions from './Actions';

let AppStoreObject = {
  appState: {
    currentPage: 'home',
    homeNotOpened: false,
    aboutNotOpened: true
  },
  init() { this.listenTo(Actions.appActions, this.onAppActions); },
  onAppActions(action) {
    switch (action) {
      case 'home':
      case 'about': this.appState.aboutNotOpened = false; break;
    }
    this.appState.currentPage = action;
    AppStore.trigger();
  },

  getAppState() { return this.appState; }
};

const AppStore = Reflux.createStore(AppStoreObject);
export default AppStore;
