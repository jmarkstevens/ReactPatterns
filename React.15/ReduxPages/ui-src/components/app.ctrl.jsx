import React from 'react';
import {connect} from 'react-redux';

import AboutPage from './about/about.page';
import ExamplesPage from './examples/examples.page';
import HomePage from './home/home.page';

let AppCtrlSty = {
  height: '100%',
  overflow: 'hidden',
  padding: '0px',
  width: '100%'
};

let allPageSty = {
  height: '100%',
  margin: '0px',
  overflow: 'hidden',
  padding: '0px',
  width: '100%'
};

function AppCtrl({appState}) {
  let page = appState.currentPage;
  let hideExamples = (page != 'examples');
  let hideHome = (page != 'home');
  let hideAbout = (page != 'about');
  return (
    <div id="AppCtrlSty" style={AppCtrlSty}>
      <div id="allPageSty" style={allPageSty}>
        <AboutPage hide={hideAbout} />
        <ExamplesPage hide={hideExamples} />
        <HomePage hide={hideHome} />
      </div>
    </div>
  );
}

function mapStateToProps(store) { return {appState: store.appState}; }

export default connect(mapStateToProps)(AppCtrl);
