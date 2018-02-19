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

export function collectCategoryOptions(neighborhood) {
  return (dispatch) => {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return fetch('/categories/options', {
      method: "POST",
      headers: headers,
      body: JSON.stringify(neighborhood)
    })
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
      let date = responseJSON.map(spot => {
        return {
          name: spot.name,
          description: spot.description,
          category: spot.category.name,
          neighborhood: spot.neighborhood.name
        }
      });
      dispatch({type: 'STORE_DATE', payload: date})
    })
  }
}
