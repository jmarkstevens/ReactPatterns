import * as Actions from './Actions';

export function wsMiddleware(store) {
  return next => action => {
    if (ipc && action.type === 'ApiGetData') {
      ipc.send('client:GetData', {});
    } else if (ipc && action.type === 'ApiSetData') {
      ipc.send('client:SetData', action.data);
    }

    return next(action);
  };
}

export default function (store) {

  ipc.on('server:GotData', (event, data) => {
    store.dispatch(Actions.apiGotData(data));
  });

  ipc.on('server:SetDataDone', () => {
    store.dispatch(Actions.apiGetData());
  });
}
