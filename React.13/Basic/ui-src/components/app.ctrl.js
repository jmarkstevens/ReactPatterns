import React from 'react';

var AppCtrlSty = {
  height: '100%',
  padding: '0 10px 0 0'
}

export default class AppCtrl extends React.Component {
  render() {
    return (
      <div id='AppCtrlSty' style={AppCtrlSty}>
        React 0.13 Basic with browserify and babel
      </div>
    );
  }
}
