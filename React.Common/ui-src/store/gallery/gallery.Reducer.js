
const initialState = {
  picList: [],
};

export default function handleActions(state = initialState, action) {
  switch (action.type) {
    case 'GetPicListDone': return {...state, ...action.payload};
    default: return state;
  }
}
