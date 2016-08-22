import React from 'react';

let AppCtrlSty = {
  height: '100%',
  padding: '0 10px 0 0'
};

export default class AppCtrl extends React.Component {
  state = {world: ''};
  componentDidMount = () => { this.sayHello(); };
  sayHello = () => { this.setState({world: 'Hello World'}); };
  render() {
    return (
      <div id="AppCtrlSty" style={AppCtrlSty}>
        React Basic Isometric
        <br /><br />
        {this.state.world}
      </div>
    );
  }
}
