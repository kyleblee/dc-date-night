import React from 'react';
import fetch from 'isomorphic-fetch';
import { requestHeaders } from '../utils/req';
import { Redirect } from 'react-router-dom';

export function loginUser(credentials) {
  return function(dispatch) {
    const request = new Request('/login', {
      method: 'POST',
      headers: requestHeaders(),
      body: JSON.stringify({auth: credentials})
    })

    return fetch(request)
      .then(response => response.json())
      .then(responseJSON => {
        if (responseJSON.jwt) {
          sessionStorage.setItem('jwt', responseJSON.jwt);
          sessionStorage.setItem('id', parseJwt(responseJSON.jwt))
          sessionStorage.setItem('expert', responseJSON.expert)
          dispatch({type: 'LOG_IN_SUCCESS'});
        } else {
          dispatch({type: 'LOG_IN_ERROR'});
        }
      })
  }
}

export function logOutUser() {
  delete sessionStorage.jwt;
  delete sessionStorage.expert;
  delete sessionStorage.id;
  return {type: 'LOG_OUT'}
}


// helper methods

function parseJwt(token) {
  let base64 = token.split('.')[1];
  return JSON.parse(window.atob(base64))["user"];
}
