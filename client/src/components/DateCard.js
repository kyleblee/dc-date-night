import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export const DateCard = props => {
  return (
    <div key={props.date.id} className="date-card">
      <Link to={`/dates/${props.date.id}`}>
        <img src={props.date.cover_photo} alt="two people on a date over coffee" />
        <h4>{props.date.title}</h4>
      </Link>
    </div>
  )
}

DateCard.propTypes = {
  date: PropTypes.object.isRequired
}
