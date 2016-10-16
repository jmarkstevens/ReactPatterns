import React from 'react';
import {connect} from 'react-redux';

import AppNotes from './app.notes';

let AppCtrlSty = {
  height: '100%',
  padding: '0 10px 0 0'
};

function AppCtrl({Data1}) {
  let data1 = Data1;
  return (
    <div id="AppCtrlSty" style={AppCtrlSty}>
      React Version: {data1['React version']}<br /><br />
      Project: {data1.Project}<br /><br />
      Current date/time: {data1.currentDateTime}<br /><br />
      <AppNotes />
    </div>
  );
}

function mapStateToProps(store) {
  return {Data1: store.data1};
}

export default connect(mapStateToProps)(AppCtrl);
