import fetch from 'isomorphic-fetch';

export function fetchDates() {
  return (dispatch) => {
    return fetch('/date_entries')
      .then(response => response.json())
      .then(responseJSON => {
        dispatch({type: 'FETCH_DATES', payload: responseJSON})
      })
  }
}

export function collectDateOptions() {
  return (dispatch) => {
    return fetch('/neighborhoods/options')
      .then(response => response.json())
      .then(responseJSON => {
        debugger;
      })
  }
}

export function generateDate() {
  debugger;
}
