export default function datesReducer(state = {
  dates: [],
  customDate: undefined
}, action) {
  switch(action.type) {
    case 'FETCH_DATES':
      return Object.assign({}, state, {dates: action.payload})
    default:
      return state;
  }
}
