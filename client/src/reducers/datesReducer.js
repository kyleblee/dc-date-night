export default function datesReducer(state = {
  dates: [],
  customDate: undefined,
  options: {}
}, action) {
  switch(action.type) {
    case 'FETCH_DATES':
      return Object.assign({}, state, {dates: action.payload})
    case 'COLLECT_NEIGHBORHOOD_OPTIONS':
      return Object.assign({}, state, {
        options: Object.assign({}, state.options, {
          neighborhoods: action.payload
        })
      });
    case 'COLLECT_CATEGORY_OPTIONS':
      return Object.assign({}, state, {
        options: Object.assign({}, state.options, {
          categories: action.payload
        })
      });
    case 'TEST':
      debugger;
    default:
      return state;
  }
}
