import React from 'react';
import PropTypes from 'prop-types';

export const CustomDateSpotCard = props => {
  return (
    <div className={'spot-card'} key={props.index}>
      <img className='spot-img' src={props.spot.photo1} alt='date spot'/>
      <div className='spot-text'>
        <h4><span className="spot-title">{props.spot.name}</span> ({props.spot.category})</h4>
        {props.spot.description &&
          <p>{props.spot.description}</p>
        }
      </div>
    </div>
  )
}

CustomDateSpotCard.propTypes = {
  index: PropTypes.number.isRequired,
  spot: PropTypes.object.isRequired
}
