import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchDates } from '../actions/dateActions';

class DatesList extends React.Component {
  componentDidMount() {
    this.props.fetchDates();
  }

  render() {
    debugger;
    
    return (
      <div className='date-list'>
        <p>Here is a datelist</p>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchDates: fetchDates
  }, dispatch);
}

const mapStateToProps = (state) => {
  return {dates: state.dates}
}

export default connect(mapStateToProps, mapDispatchToProps)(DatesList);
