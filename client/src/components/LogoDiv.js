import React from 'react';
import { Link } from 'react-router-dom';

export const LogoDiv = props => {
  return (
    <div className="logo-div">
      <Link to='/'><h2 id="logo">DC <br/> Date Night</h2></Link>
    </div>
  )
}
