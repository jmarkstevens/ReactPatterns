import * as appActions from './app.actions';

let socket = null;

export function wsMiddleware() {
  return (next) => (action) => {
    if (socket) {
      switch (action.type) {
      }
    }
    return next(action);
  };
}

export default function (store) {
  /* eslint-disable */
  socket = io();
  /* eslint-enable */

}
