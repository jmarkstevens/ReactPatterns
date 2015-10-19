import React, {Component} from 'react/addons';

import {mapStyle} from './map.styles';

export default class MapLegend extends Component {
  render() {
    return (
       <div style={mapStyle}>
          {this.props.text}
       </div>
    );
  }
}
