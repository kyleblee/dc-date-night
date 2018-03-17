import React from 'react';
import { Link } from 'react-router-dom';

export const NavBar = props => {
  function renderCurate() {
    if (sessionStorage.expert === "true") {
      return (
        <Link to='/dates/new'>Curate</Link>
      )
    }
  }

  return (
    <nav className='navbar'>
      <Link to='/plan-my-date'>Generate</Link>
      <Link to='/dates'>Browse</Link>
      {renderCurate()}
      <Link to='/#about'>About</Link>
    </nav>
  )
}
