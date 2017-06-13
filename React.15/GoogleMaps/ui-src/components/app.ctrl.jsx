import React from 'react';
import {connect} from 'react-redux';

import NavBar from './common/nav1.bar';

import DashboardPage from './dashboard/dashboard.page';

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

class AppCtrl extends React.Component {
  state = {markers: []};
  componentDidMount() {
    let _this = this;
    window.setTimeout(() => _this.setMarkers(_this), 2000);
  }
  setMarkers = _this => {
    let merlinLocation = {lat: 32.939095, lng: -117.043607};
    let homeLocation = {lat: 33.264611, lng: -117.083043};
    let nyLocation = {lat: 40.708314, lng: -74.101025};
    let flLocation = {lat: 26.247621, lng: -80.110884};
    return _this.setState({
      markers: [{position: merlinLocation}, {position: homeLocation}, {position: nyLocation}, {position: flLocation}]
    });
  };
  render() {
    let page = this.props.appState.currentPage;
    let hideDashboard = page != 'dashboard';
    return (
      <div id="AppCtrlSty" style={AppCtrlSty}>
        <NavBar fromPage={page} />
        <DashboardPage hide={hideDashboard} markers={this.state.markers} />
      </div>
    );
  }
}

function mapStateToProps(store) {
  return {appState: store.appState};
}

export default connect(mapStateToProps)(AppCtrl);
