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

export function collectCategoryOptions() {
  return (dispatch) => {
    return fetch('/categories/options')
      .then(response => response.json())
      .then(responseJSON => {
        let options = responseJSON.map(n => n.name);
        dispatch({type: 'COLLECT_CATEGORY_OPTIONS', payload: options});
      })
  }
}

export function generateDate(dateChoices) {
  return (dispatch) => {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return fetch('/date-generate', {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(dateChoices)
    })
    .then(response => response.json())
    .then(responseJSON => {
      debugger;
    })
    // ok, dateChoices are making it here; even though it doesn't work in debugger, it is accessible in scope
    // however, it might get tripped up when you call fetch... not sure, but at least it is making it here.
  }
}
