import React from 'react';

import {mapStyle} from './map.styles';

export default function MapLegend({text}) {
  return (
    <div style={mapStyle}>
      {text}
    </div>
  );
}
