import 'whatwg-fetch';

let jsonHeader = {'Accept': 'application/json', 'Content-Type': 'application/json'};

export function apiSetData(data) {
  return (dispatch) => {
    fetch('/routes/setData', {method: 'POST', headers: jsonHeader, body: JSON.stringify(data)})
      .then(() => {
        fetch('/routes/getData')
          .then((response) => response.json())
          .then((json) => dispatch({type: 'GOT_DATA', payload: json}));
      });
  };
}
