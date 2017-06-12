const pages = ['dashboard'];
const initialAppState = {
  currentPage: pages[0],
};

export default function handleActions(state = initialAppState, action) {
  let _appState = Object.assign({}, state);
  switch (action.type) {
    case 'AppNavMenuAction':
      _appState.currentPage = action.newPage;
      return _appState;
    default:
      return state;
  }
}
