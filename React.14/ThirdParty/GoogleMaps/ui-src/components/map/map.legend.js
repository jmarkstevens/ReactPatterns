import React from 'react/addons';

import {mapStyle} from './map.styles';

export default class MapLegend extends React.Component {
  render() {
    return (
       <div style={mapStyle}>
          {this.props.text}
       </div>
    );
  }
}
