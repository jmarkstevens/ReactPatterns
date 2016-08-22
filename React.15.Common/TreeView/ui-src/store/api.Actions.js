import 'whatwg-fetch';

let jsonHeader = {'Accept': 'application/json', 'Content-Type': 'application/json'};

export function apiGetAppData() {
  return (dispatch) => {
    fetch('/routes/getAppData')
      .then((response) => response.json())
      .then((json) => dispatch({type: 'GotAppData', payload: json}));
  };
}

export function apiGetImageList() {
  return (dispatch) => {
    fetch('/routes/getImageList')
      .then((response) => response.json())
      .then((json) => dispatch({type: 'GotImageList', payload: json}));
  };
}

export function apiGetTreeView() {
  return (dispatch) => {
    fetch('/routes/getTreeView')
      .then((response) => response.json())
      .then((json) => dispatch({type: 'GotTreeView', payload: json}));
  };
}

export function apiSetAppData(data) {
  fetch('/routes/setAppData', {method: 'POST', headers: jsonHeader, body: JSON.stringify(data)});
}

export function apiSetTreeView(data) {
  fetch('/routes/setTreeView', {method: 'POST', headers: jsonHeader, body: JSON.stringify(data)});
}
