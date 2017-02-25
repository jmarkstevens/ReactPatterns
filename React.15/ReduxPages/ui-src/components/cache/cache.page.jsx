import React from 'react';

import Cache from '../../lib/cache';

let AboutPageSty = {
  border: 'solid 1px darkslategrey',
  height: 'calc(100% - 2px)',
  overflow: 'hidden',
  padding: '0px',
  width: '100%'
};

export default class CachePage extends React.Component {
  state = {constructorTime: new Date().toLocaleString(), componentDidMountTime:  ''};
  componentDidMount = () => { this.setState({componentDidMountTime:  new Date().toLocaleString()}); };
  render() {
    if (this.props.hide) return null;
    let aTime = (new Cache()).time.toString();
    let renderTime = new Date().toLocaleString();
    return (
      <div id="CachePage" className="contentPage" style={AboutPageSty}>
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
