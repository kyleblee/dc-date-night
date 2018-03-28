import React from 'react';
import PropTypes from 'prop-types';

export const SpotCard = props => {
  return (
    <div className="spot-card">
      <h4 className="marker-font">Spot #{props.index + 1}: {props.name}</h4>
      <img src={props.photo} alt={props.name} />
      <p>{props.description}</p>
    </div>
  )
}

SpotCard.propTypes = {
  index: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
  description: PropTypes.string
}
