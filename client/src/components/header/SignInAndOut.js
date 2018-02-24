import React from 'react';
import { Link } from 'react-router-dom';

const SignInAndOut = props => {
  return (
    <div className="sign-in-and-out">
      <Link to='/sign-in'>Sign In / Sign Up</Link>
    </div>
  )
}

export default SignInAndOut;
