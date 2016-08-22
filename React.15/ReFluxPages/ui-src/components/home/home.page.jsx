import React from 'react';

import NavMenu from '../common/nav.menu';
import Cache from '../../lib/cache';

let HomePageSty = {
  border: 'solid 1px darkslategrey',
  height: 'calc(100% - 2px)',
  overflow: 'hidden',
  padding: '0px',
  width: 'calc(100% - 32px)'
};

export default class HomePage extends React.Component {
  state = {constructorTime: new Date().toLocaleString(), componentDidMountTime:  ''};
  componentDidMount = () => { this.setState({componentDidMountTime:  new Date().toLocaleString()}); };
  render() {
    if (this.props.notOpened) return null;
    let aTime = (new Cache()).time.toString();
    let renderTime = new Date().toLocaleString();
    let platform = window.navigator.platform;
    let innerWidth = Math.floor(window.innerWidth);
    let innerHeight = Math.floor(window.innerHeight);
    let screenwidth = Math.floor(window.screen.width);
    let screenheight = Math.floor(window.screen.height);
    let devicePixelRatio = Math.floor(window.devicePixelRatio);
    let navigatorproduct = window.navigator.product;
    let navigatoruserAgent = window.navigator.userAgent;
    return (
      <div style={HomePageSty}>
        React 15 ReFlux used for app state. This is the Home Page.<br /><br />
        <NavMenu />
        Platform: {platform}<br />
        Inner Width: {innerWidth}<br />
        Inner Height: {innerHeight}<br />
        Screen Width: {screenwidth}<br />
        Screen Height: {screenheight}<br />
        Device Pixel Ratio: {devicePixelRatio}<br />
        Navigator Product: {navigatorproduct}<br />
        Navigator User Agent: {navigatoruserAgent}<br /><br />
        singleton object time: {aTime}
        <br /><br />
        constructorTime: {this.state.constructorTime}
        <br /><br />
        componentDidMountTime: {this.state.componentDidMountTime}
        <br /><br />
        renderTime: {renderTime}
      </div>
    );
  }
}
