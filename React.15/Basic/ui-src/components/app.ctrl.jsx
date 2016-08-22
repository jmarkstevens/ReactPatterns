import React from 'react';

import AppNotes from './app.notes';

let AppCtrlSty = {
  height: '100%',
  padding: '0 10px 0 0'
};

export default class AppCtrl extends React.Component {
  state = {world: ''};
  componentWillMount = () => { this.sayHello(); };
  sayHello = () => { this.setState({world: 'Hello World'}); };
  render() {
    return (
      <div id="AppCtrlSty" style={AppCtrlSty}>
        {this.state.world}
        <AppNotes />
      </div>
    );
  }
}
