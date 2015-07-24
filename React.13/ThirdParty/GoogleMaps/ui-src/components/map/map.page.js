/*
 * Base Google Map example
 */
import React, {PropTypes, Component} from 'react/addons';
// import shouldPureComponentUpdate from 'react-pure-render/function';

import GoogleMap from './../../map/google_map';
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
