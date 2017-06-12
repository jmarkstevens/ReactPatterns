const initialMapState = {
  mapZoom: 3,
  mapCenter: {lat: 38.0000, lng: -97.0000},
  mapInitialized: false
};

export default function handleActions(state = initialMapState, action) {
  let _mapState = Object.assign({}, state);
  switch (action.type) {
    case 'MapChangeZoomAction':
      _mapState.mapZoom = action.newZoom;
      return _mapState;
    case 'MapChangeCenterAction':
      _mapState.mapCenter = action.newCenter;
      return _mapState;
    case 'MapInitializedAction':
      _mapState.mapInitialized = true;
      return _mapState;
    default:
      return state;
  }
}
