import React, {PropTypes, Component} from 'react/addons';
import GoogleMap from 'google-map-react';

import MapLegend from './map.legend';

export default class SimpleMapPage extends Component {
  render() {
    return (
       <GoogleMap
        center={[33.264611, -117.083043]}
        zoom={12}>
        <MapLegend lat={33.264611} lng={-117.083043} text={'MataDham'} />
      </GoogleMap>
    );
  }
}
