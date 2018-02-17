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

export function collectNeighborhoodOptions() {
  return (dispatch) => {
    return fetch('/neighborhoods/options')
      .then(response => response.json())
      .then(responseJSON => {
        let options = responseJSON.map(n => n.name);
        dispatch({type: 'COLLECT_NEIGHBORHOOD_OPTIONS', payload: options})
      })
  }
}

export function generateDate() {
  debugger;
}
