import React from 'react';
import { Redirect } from 'react-router-dom';
import CuratedDateForm from '../containers/CuratedDateForm';

export const requireAuth = props => {
  if (!sessionStorage.jwt) {
    return <Redirect to="/sign-in" />;
  }

  if (sessionStorage.expert !== "true") {
    return <Redirect to="/" />;
  }

  if (props.match.path === "/dates/new" || props.match.path === "/dates/:id/edit") {
    return <CuratedDateForm {...props}/>;
  }
  // Other authenticated routes can be added here as else / if statements
  // that draw from props.match.path in a similar way.
}
