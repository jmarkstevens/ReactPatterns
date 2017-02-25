import 'whatwg-fetch';

let jsonHeader = {'Accept': 'application/json', 'Content-Type': 'application/json'};

export function apiGetAppData() {
  return (dispatch) => {
    fetch('/routes/getAppData')
      .then((response) => response.json())
      .then((json) => dispatch({type: 'GetAppDataDone', payload: json}));
  };
}

export function apiGetImageList() {
  return (dispatch) => {
    fetch('/routes/getImageList')
      .then((response) => response.json())
      .then((json) => dispatch({type: 'GetImageListDone', payload: json}));
  };
}

export function apiGetInputData() {
  return (dispatch) => {
    fetch('/routes/getInputData')
      .then((response) => response.json())
      .then((json) => dispatch({type: 'GetInputDataDone', payload: json}));
  };
}

export function apiGetPicList() {
  return (dispatch) => {
    fetch('/routes/getPicList')
      .then((response) => response.json())
      .then((json) => dispatch({type: 'GetPicListDone', payload: json}));
  };
}

export function apiGetTreeView() {
  return (dispatch) => {
    fetch('/routes/getTreeView')
      .then((response) => response.json())
      .then((json) => dispatch({type: 'GetTreeViewDone', payload: json}));
  };
}

export function apiSetAppData(data) {
  fetch('/routes/setAppData', {method: 'POST', headers: jsonHeader, body: JSON.stringify(data)});
}

export function apiSetInputData(data) {
  fetch('/routes/setInputData', {method: 'POST', headers: jsonHeader, body: JSON.stringify(data)});
}

export function apiSetTreeView(data) {
  fetch('/routes/setTreeView', {method: 'POST', headers: jsonHeader, body: JSON.stringify(data)});
}
