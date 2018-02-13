export default function datesReducer(state = [], action) {
  switch(action.type) {
    case 'FETCH_DATES':
      return [].concat(state, action.payload)
    default:
      return state;
  }
}
