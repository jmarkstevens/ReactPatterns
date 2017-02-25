import React from 'react';
import {connect} from 'react-redux';

import NavBar from './common/nav.bar';

import CachePage from './cache/cache.page';
import EventPage from './event/event.page';
import HomePage from './home/home.page';
import ObjectPage from './object/object.page';
import RadiumPage from './radium/radium.page';

let AppCtrlSty = {
  height: '100%',
  overflow: 'hidden',
  padding: '0px',
  width: '100%'
};

function AppCtrl({appState}) {
  let page = appState.currentPage;
  let hideCache = (page != 'cache');
  let hideEvent = (page != 'event');
  let hideHome = (page != 'home');
  let hideObject = (page != 'object');
  let hideRadium = (page != 'radium');
  return (
    <div id="AppCtrlSty" style={AppCtrlSty}>
      <NavBar fromPage={page} />
      <CachePage hide={hideCache} />
      <EventPage hide={hideEvent} />
      <HomePage hide={hideHome} />
      <ObjectPage hide={hideObject} />
      <RadiumPage hide={hideRadium} />
    </div>
  );
}

function mapStateToProps(store) { return {appState: store.appState}; }

export default connect(mapStateToProps)(AppCtrl);
