import React from 'react';
import NavBar from '../components/header/navbar';
import LogoDiv from '../components/LogoDiv';
import SignInAndOut from '../components/header/SignInAndOut';

class Header extends React.Component {
  render() {
    return (
      <div className='header'>
        <LogoDiv />
        <NavBar />
        <SignInAndOut />
      </div>
    )
  }
}

export default Header;
