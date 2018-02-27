export default function datesReducer(state = {
  curatedDates: [],
  customDate: undefined,
  options: {},
  editCuratedDate: undefined
}, action) {
  switch(action.type) {
    case 'FETCH_DATES':
      return Object.assign({}, state, {curatedDates: action.payload})
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
    case 'STORE_DATE':
      return Object.assign({} , state, {
        customDate: action.payload
      });
    case 'RESET_CUSTOM_DATE':
      return Object.assign({}, state, {
        customDate: undefined
      })
    case 'SET_EDITCURATEDDATE':
      return Object.assign({}, state, {
        editCuratedDate: action.payload
      })
    case 'CLEAR_EDITCURATEDDATE':
      return Object.assign({}, state, {
        editCuratedDate: undefined
      })
    default:
      return state;
  }
}
