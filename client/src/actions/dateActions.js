import fetch from 'isomorphic-fetch';
import { requestHeaders } from '../utils/req';

export function fetchDates(neighborhood, cap) {
  return (dispatch) => {
    const reqNeighborhood = JSON.stringify({
      neighborhood: neighborhood,
      cap: cap
    });

    return fetch('/date_entries/browse', {
      method: 'POST',
      headers: requestHeaders(),
      body: reqNeighborhood
    })
      .then(response => response.json())
      .then(responseJSON => {
        const formattedDates = formatSpotDescriptions(responseJSON);
        dispatch({type: 'FETCH_DATES', payload: formattedDates})
      })
  }
}

export function collectNeighborhoodOptions() {
  return (dispatch) => {
    return fetch('/neighborhoods/options')
      .then(response => response.json())
      .then(responseJSON => {
        let options = responseJSON.map(n => n.name).sort();
        dispatch({type: 'COLLECT_NEIGHBORHOOD_OPTIONS', payload: options})
      })
  }
}

export function collectCategoryOptions(neighborhood) {
  return (dispatch) => {
    return fetch('/categories/options', {
      method: "POST",
      headers: requestHeaders(),
      body: JSON.stringify(neighborhood)
    })
      .then(response => response.json())
      .then(responseJSON => {
        let options = responseJSON.map(n => n.name).sort();
        dispatch({type: 'COLLECT_CATEGORY_OPTIONS', payload: options});
      })
  }
}

export function generateDate(dateChoices) {
  return (dispatch) => {
    return fetch('/date-generate', {
      method: 'POST',
      headers: requestHeaders(),
      body: JSON.stringify(dateChoices)
    })
    .then(response => response.json())
    .then(responseJSON => {
      let date = responseJSON.map(spot => {
        return {
          name: spot.name,
          description: spot.description,
          photo1: spot.photo1,
          category: spot.category.name,
          neighborhood: spot.neighborhood.name
        }
      });
      dispatch({type: 'STORE_DATE', payload: date})
    })
  }
}

export function resetGenerate() {
  return (dispatch) => {
    dispatch({type: 'RESET_CUSTOM_DATE'})
  }
}

export function fetchExistingDate(dateId) {
  return (dispatch) => {
    return fetch(`/date_entries/${dateId}/edit`, {
      headers: requestHeaders()
    })
    .then(response => response.json())
    .then(responseJSON => {
      formatSpotDescriptions([responseJSON]);
      dispatch({type: 'SET_EDITCURATEDDATE', payload: responseJSON});
    })
  }
}

export function clearEditCuratedDate() {
  return (dispatch) => {
    dispatch({type: 'CLEAR_EDITCURATEDDATE'});
  }
}

export function deleteCuratedDate(dateId) {
  return (dispatch) => {
    fetch(`/date_entries/${dateId}`, {
      method: 'DELETE',
      headers: requestHeaders()
    })
  }
}

export function createOrUpdateCuratedDate(date) {
  return (dispatch) => {
    const dateImage = date.coverPhoto;
    delete date.coverPhoto;

    let spotPhotos = date.spots.map(spot => {
      if (spot.id) {
        return {[spot.id]: spot.photo}
      } else {
        return {[spot.title]: spot.photo}
      }
    })

     if (date.id) {
       // update fetch
       return fetch(`/date_entries/${date.id}`, {
          method: 'PUT',
          headers: requestHeaders(),
          body: JSON.stringify({date: date})
        })
        .then(response => response.json())
        .then(responseJSON => {
          uploadPhotos(responseJSON, dateImage, spotPhotos);
        })
     } else {
       // create fetch
       return fetch('/date_entries', {
          method: 'POST',
          headers: requestHeaders(),
          body: JSON.stringify({date: date})
        })
        .then(response => response.json())
        .then(responseJSON => {
          uploadPhotos(responseJSON, dateImage, spotPhotos);
        })
     }
  }
}


// Helper Functions

function uploadPhotos(responseJSON, dateImage, spotPhotos) {
  let photoForm = new FormData();

  photoForm.append('id', responseJSON.id);
  photoForm.append('cover_photo', dateImage);

  for (let i = 0; i < spotPhotos.length; i++) {
    for (let spot of responseJSON.spots) {
      if (Object.keys(spotPhotos[i])[0] === spot.name) {
        photoForm.append(spot.id.toString(), Object.values(spotPhotos[i])[0])
      }
    }
    photoForm.append(Object.keys(spotPhotos[i])[0], Object.values(spotPhotos[i])[0])
  }

  fetch('/upload', {
    method: 'POST',
    headers: {'AUTHORIZATION': `Bearer ${sessionStorage.jwt}`},
    body: photoForm
  });
}

function formatSpotDescriptions(response) {
  return response.map(date => {
    const descriptions = JSON.parse(date.spots_descriptions);
    for (let spot of date.spots) {
      if (descriptions) {
        spot.description = descriptions[spot.name];
      }
    }
    return date;
  })
}
