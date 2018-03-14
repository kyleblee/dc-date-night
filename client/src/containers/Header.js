import React from 'react';
import { NavBar } from '../components/header/NavBar';
import { LogoDiv } from '../components/LogoDiv';
import { SignInAndOut } from '../components/header/SignInAndOut';
import { connect } from 'react-redux';

class Header extends React.Component {
  render() {
    return (
      <div className='header'>
        <LogoDiv />
        <NavBar />
        <SignInAndOut session={this.props.session}/>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    session: state.session.session
  }
}

export default connect(mapStateToProps, null)(Header);
