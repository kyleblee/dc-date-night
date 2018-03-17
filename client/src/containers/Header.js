import React from 'react';
import { NavBar } from '../components/header/NavBar';
import { LogoDiv } from '../components/LogoDiv';
import { SignInAndOut } from '../components/header/SignInAndOut';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { logOutUser } from '../actions/sessionActions';
import { withRouter } from 'react-router';

class Header extends React.Component {
  logOut = event => {
    event.preventDefault();
    this.props.logOutUser();
    this.props.history.push('/');
  }

  render() {
    return (
      <div className='header'>
        <LogoDiv />
        <NavBar />
        <SignInAndOut session={this.props.session} logOut={this.logOut}/>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    session: state.session.session
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    logOutUser
  }, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));
