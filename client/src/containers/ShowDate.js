import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { SpotCard } from '../components/SpotCard';

const ShowDate = props => {
  let spotsHTML;

  if (Object.keys(props.date).length > 0) {
    spotsHTML = props.date.spots.map((spot, index) => {
      return (
        <SpotCard index={index} name={spot.name} description={spot.description} photo={spot.photo1} />
      )
    })
  } else {
    props.history.push('/dates');
  }

  return (
    <div className="date-show">
      <h2>{props.date.title}</h2>
      <img src={props.date.cover_photo} />
      <p>{props.date.description}</p>
      {spotsHTML}
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  let date = state.dates.curatedDates.find(date => date.id === parseInt(ownProps.match.params.id))

  if (date) {
    return { date }
  } else {
    return { date: {} }
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({}, dispatch);
}

export default connect(mapStateToProps, null)(ShowDate);
