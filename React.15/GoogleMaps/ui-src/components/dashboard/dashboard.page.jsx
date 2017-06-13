import React from 'react';

import MapCtrl from './map.ctrl';

const DashboardPageSty = {
  border: 'solid 1px darkslategrey',
  height: 'calc(100% - 2px)',
  overflow: 'hidden',
  padding: '0px',
  width: '100%'
};

export default class DashboardPage extends React.Component {
  render() {
    if (this.props.hide) return null;
    return (
      <div id="DashboardPage" style={DashboardPageSty}>
        <div id="sideFlex" className="FlexBox">
          <div id="panelArea" style={{height: '100%', width: '30%'}} />
          <div id="mapArea" style={{height: '100%', width: '70%'}}>
            <MapCtrl hide={this.props.hide} markers={this.props.markers} style={{height: '70%', width: '100%'}} />
            <div id="sideFlex" className="FlexBox" style={{height: '30%', width: '100%'}} />
          </div>
        </div>
      </div>
    );
  }
}
