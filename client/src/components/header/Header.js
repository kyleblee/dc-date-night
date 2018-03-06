import React from 'react';
import { NavBar } from './NavBar';
import { LogoDiv } from '../LogoDiv';
import { SignInAndOut } from './SignInAndOut';

export const Header = props => {
  return (
    <div className='header'>
      <LogoDiv />
      <NavBar />
      <SignInAndOut />
    </div>
  )
}
