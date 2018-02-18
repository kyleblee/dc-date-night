import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = props => {
  return (
    <nav className='navbar'>
      <Link to='/plan-my-date'>Create</Link>
      <Link to='#'>Browse</Link>
      <Link to='#'>Share</Link>
      <Link to='#'>About</Link>
    </nav>
  )
}

export default NavBar;
