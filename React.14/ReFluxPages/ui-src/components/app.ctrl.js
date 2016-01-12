import React from 'react';

import AboutPage from './about/about.page';
import HomePage from './home/home.page';

import AppStore from '../flux/App.Store';

let AppCtrlSty = {
  height: '100%',
  padding: '0 10px 0 0'
}

let allPageSty = {
  height: '100%',
  margin: '0',
  overflow: 'hidden',
  padding: '0',
  width: '100%'
};

class AppCtrlRender extends React.Component {
   render() {
    let page = this.state.appState.currentPage;
    let showAboutSty = (page == 'about') ? {} : {display: 'none'};
    let showHomeSty = (page == 'home') ? {} : {display: 'none'};
    return (
      <div id='AppCtrlSty' style={AppCtrlSty}>
        <div id='allPageSty' style={allPageSty}>
          <span id='showAboutSty' style={showAboutSty}>
            <AboutPage notOpened={this.state.appState.aboutNotOpened} />
          </span>
          <span id='showHomeSty' style={showHomeSty}>
            <HomePage notOpened={this.state.appState.homeNotOpened} />
          </span>
        </div>
      </div>
    );
  }
}

let getState = function() { return {appState: AppStore.getAppState(),}; };

export default class AppCtrl extends AppCtrlRender {
  constructor() {
    super();
    this.state = getState();
  }

  componentDidMount = () => { this.unsubscribe = AppStore.listen(this.storeDidChange); };
  componentWillUnmount = () => { this.unsubscribe(); };
  storeDidChange = () => { this.setState(getState()); };
}
