import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class SignIn extends React.Component {
  render() {
    return (
      <p>You made it to the sign in page.</p>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    // fetchDates: fetchDates
  }, dispatch);
}

const mapStateToProps = (state) => {
  return {
    // dates: state.dates.curatedDates
  }
}

export default connect(null, null)(SignIn);
