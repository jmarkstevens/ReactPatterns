
export function mapChangeZoomAction(newZoom) {
  return {type: 'MapChangeZoomAction', newZoom};
}

export function mapChangeCenterAction(newCenter) {
  return {type: 'MapChangeCenterAction', newCenter};
}

export function mapInitializedAction() {
  return {type: 'MapInitializedAction'};
}
