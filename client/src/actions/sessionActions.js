import fetch from 'isomorphic-fetch';

export function loginSuccess() {
  return {type: 'LOG_IN_SUCCESS'};
}

export function loginUser(credentials) {
  return function(dispatch) {
    const request = new Request('/login', {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify({auth: credentials})
    })

    return fetch(request)
      .then(response => response.json())
      .then(responseJSON => {
        sessionStorage.setItem('jwt', responseJSON.jwt);
        sessionStorage.setItem('expert', responseJSON.expert);
        dispatch(loginSuccess());
      })
  }
}

export function logOutUser() {
  delete sessionStorage.jwt;
  delete sessionStorage.expert;
  return {type: 'LOG_OUT'}
}