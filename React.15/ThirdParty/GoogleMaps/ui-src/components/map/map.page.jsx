import React from 'react';
import GoogleMap from 'google-map-react';

import MapLegend from './map.legend';

export default function SimpleMapPage() {
  return (
    <GoogleMap
      center={[33.264611, -117.083043]}
      zoom={12}
    >
      <MapLegend lat={33.264611} lng={-117.083043} text={'Rancho Videha'} />
    </GoogleMap>
  );
}
