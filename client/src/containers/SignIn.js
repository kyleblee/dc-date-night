import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { loginUser } from '../actions/sessionActions';
import { Errors } from '../components/Errors';

class SignIn extends React.Component {
  constructor() {
    super();

    this.state = {
      credentials: {
        email: "",
        password: ""
      }
    }
  }

  updateInput = event => {
    const credentials = this.state.credentials;
    credentials[event.target.name] = event.target.value;
    this.setState({
      credentials: credentials
    })
  }

  onSubmit = event => {
    event.preventDefault();
    this.props.loginUser(this.state.credentials)
      .then(() => {
        if (sessionStorage.id) {
          this.props.history.push('/');
        }
      });
  }

  render() {
    return (
      <div id="sign-in-div">
        <Errors errors={this.props.error} />
        <form id="sign-in-form" onSubmit={this.onSubmit}>
          <div>
            <label className="form-labels">Email:</label>
            <input
              name="email"
              type="text"
              value={this.state.email}
              onChange={this.updateInput} /><br />
            <label className="form-labels">Password:</label>
            <input
              name="password"
              type="password"
              value={this.state.password}
              onChange={this.updateInput} />
          </div>
          <input type="submit" value="Sign in!"/>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    loginUser
  }, dispatch);
}

const mapStateToProps = (state) => {
  return {
    error: state.session.error
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
