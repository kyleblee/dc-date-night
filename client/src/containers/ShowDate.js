import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const ShowDate = props => {
  return (
    <p>congrats, you've made it to ShowDate</p>
  )
}

const mapStateToProps = (state, ownProps) => {
  debugger;
  return {
    dateId: ownProps.match.params.id
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({}, dispatch);
}

export default connect(mapStateToProps, null)(ShowDate);
