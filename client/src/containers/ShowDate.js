import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { SpotCard } from '../components/SpotCard';
import { deleteCuratedDate } from '../actions/dateActions';
import { ShowDateOptions } from '../components/ShowDateOptions';
import PropTypes from 'prop-types';

const ShowDate = props => {
  let spotsHTML;

  if (Object.keys(props.date).length > 0) {
    spotsHTML = props.date.spots.map((spot, index) => {
      return (
        <SpotCard key={"spot-" + index} index={index} name={spot.name} description={spot.description} photo={spot.photo1} />
      )
    })
  } else {
    props.history.push('/dates');
  }

  let handleEditButton = function() {
    props.history.push(`/dates/${props.date.id}/edit`);
  }

  let handleDeleteButton = function() {
    let deleteDate = window.confirm(`Are you sure you want to delete ${props.date.title}?`);
    if (deleteDate) {
      props.deleteCuratedDate(props.date.id);
      setTimeout(() => {
        props.history.push('/dates');
      }, 500)
    }
  }

  window.scrollTo(0,0);

  return (
    <div className="date-show">
      <h2>{props.date.title}</h2>
      <img src={props.date.cover_photo} alt={props.date.title}/>
      <p>{props.date.description}</p>
      {spotsHTML}
      <ShowDateOptions
        date={props.date}
        handleEditButton={handleEditButton}
        handleDeleteButton={handleDeleteButton} />
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  let date = state.dates.curatedDates.find(date => date.id === parseInt(ownProps.match.params.id, 10))

  if (date) {
    return { date }
  } else {
    return { date: {} }
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    deleteCuratedDate
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowDate);

ShowDate.propTypes = {
  deleteCuratedDate: PropTypes.func.isRequired,
  date: PropTypes.object
}
