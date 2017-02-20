import * as Actions from './Actions';

var socket = null;

export function wsMiddleware() {
  return (next) => (action) => {
    if (socket && action.type === 'ApiGetData') {
      console.log('ApiGetData');
      socket.emit('client:GetData', {});
    } else if (socket && action.type === 'ApiSetData') {
      console.log('ApiSetData');
      socket.emit('client:SetData', action.data);
    }

    return next(action);
  };
}

export default function (store) {
  /* eslint-disable */
  socket = new io();
  /* eslint-enable */

  socket.on('server:GetDataDone', (data) => {
    console.log('GetDataDone');
    store.dispatch(Actions.apiGotData(data));
  });

  socket.on('server:SetDataDone', () => {
    console.log('SetDataDone');
    store.dispatch(Actions.apiGetData());
  });
}
