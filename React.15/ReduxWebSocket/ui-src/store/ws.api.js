import * as Actions from './Actions';

var socket = null;

export function wsMiddleware(store) {
  return next => action => {
    if (socket && action.type === 'ApiGetData') {
      socket.send('client:GetData', {});
    } else if (socket && action.type === 'ApiSetData') {
      socket.send('client:SetData', action.data);
    }

    return next(action);
  };
}

export default function (store) {
  socket = new Primus();

  socket.on('server:GotData', data => {
    store.dispatch(Actions.apiGotData(data));
  });

  socket.on('server:SetDataDone', () => {
    store.dispatch(Actions.apiGetData());
  });
}
