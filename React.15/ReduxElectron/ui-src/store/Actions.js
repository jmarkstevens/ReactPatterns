export function apiGetData() {
  return { type: 'ApiGetData' };
}

export function apiGotData(data) {
  return { type: 'ApiGotData', data };
}

export function apiSetData(data) {
  return { type: 'ApiSetData', data };
}
