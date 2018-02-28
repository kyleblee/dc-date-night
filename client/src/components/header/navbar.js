import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = props => {
  return (
    <nav className='navbar'>
      <Link to='/plan-my-date'>Generate</Link>
      <Link to='/dates'>Browse</Link>
      <Link to='/dates/new'>Curate</Link>
      <Link to='/#about'>About</Link>
    </nav>
  )
}

export default NavBar;
