import React from 'react';
// import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class SignIn extends React.Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: ""
    }
  }

  updateInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <div id="sign-in-div">
        <form id="sign-in-form">
          <div>
            <label className="form-labels">Email:</label>
            <input
              name="email"
              type="text"
              value={this.state.email}
              onChange={this.updateInput} /><br />
          </div>
          <label className="form-labels">Password:</label>
          <input
            name="password"
            type="password"
            value={this.state.password}
            onChange={this.updateInput} />
        </form>
      </div>
    )
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return bindActionCreators({
//     fetchDates: fetchDates
//   }, dispatch);
// }
//
// const mapStateToProps = (state) => {
//   return {
//     dates: state.dates.curatedDates
//   }
// }

export default connect(null, null)(SignIn);
