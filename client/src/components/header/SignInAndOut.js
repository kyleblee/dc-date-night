import React from 'react';
import { Link } from 'react-router-dom';

export const SignInAndOut = props => {
  if (props.session) {
    return (
      <div className="sign-in-and-out">
        <Link to='#' onClick={props.logOut}>Sign Out</Link>
      </div>
    )
  } else {
    return (
      <div className="sign-in-and-out">
        <Link to='/sign-in'>Sign In</Link>
      </div>
    )
  }
}
