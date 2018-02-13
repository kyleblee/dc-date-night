import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchDates } from '../actions/dateActions';
import DateCard from '../components/DateCard';

class DatesList extends React.Component {
  componentDidMount() {
    this.props.fetchDates();
  }

  render() {
    const datesHTML = this.props.dates.map(date =>
      <DateCard date={date} key={date.id}/>
    );

    return (
      <div className='date-list'>
        {datesHTML}
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
