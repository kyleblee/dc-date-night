import React from 'react';

export function requestHeaders() {
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');

  if (sessionStorage.jwt) {
    headers.append('AUTHORIZATION', `Bearer ${sessionStorage.jwt}`);
  }

  return headers;
}
