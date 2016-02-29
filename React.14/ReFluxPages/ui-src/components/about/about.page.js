import React from 'react';
import NavMenu from '../common/nav.menu';
import Cache from '../../lib/cache';

let AboutPageSty = {
  border: 'solid 1px darkslategrey',
  height: 'calc(100% - 2px)',
  overflow: 'hidden',
  padding: '0',
  width: 'calc(100% - 32px)'
};

export default class AboutPage extends React.Component {
  constructor() {
    super();
    this.state = {constructorTime: new Date().toLocaleString(), componentDidMountTime:  ''};
  }
  componentDidMount = () => { this.setState({componentDidMountTime:  new Date().toLocaleString()}); };
  render() {
    if (this.props.notOpened) return null;
    let aTime = (new Cache()).time.toString();
    let renderTime = new Date().toLocaleString();
    return (
      <div style={AboutPageSty}>
        React 0.14 ReFlux used for app state. This is the About Page.
        <NavMenu /><br/><br/>
        singleton object time: {aTime}
        <br/><br/>
        constructorTime: {this.state.constructorTime}
        <br/><br/>
        componentDidMountTime: {this.state.componentDidMountTime}
        <br/><br/>
        renderTime: {renderTime}
      </div>
    );
  }
}
