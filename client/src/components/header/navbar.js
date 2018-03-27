import React from 'react';
import { Link } from 'react-router-dom';
import { renderCurate } from '../../utils/auth';

export const NavBar = props => {
  return (
    <nav className='navbar'>
      <Link to='/plan-my-date'>Generate</Link>
      <Link to='/dates'>Browse</Link>
      {renderCurate()}
      <Link to='/#about'>About</Link>
    </nav>
  )
}
