import React from 'react';
import { CustomDateSpotCard } from './CustomDateCard';
import PropTypes from 'prop-types';

export const CustomDate = props => {
  if (props.customDate) {
    const spotsHTML = props.customDate.map((spot, index) =>
        <CustomDateSpotCard spot={spot} index={index} />
      );

    return (
      <div className="custom-date">
        <h3>Your date in:</h3>
        <h2>{props.customDate[0].neighborhood}</h2>
        {spotsHTML}
        <button className="start-over-button" onClick={props.resetGenerate}>
          Try again
        </button>
      </div>
    )
  } else {
    return null;
  }
}

CustomDate.propTypes = {
  customDate: PropTypes.arrayOf(PropTypes.object),
  resetGenerate: PropTypes.func.isRequired
}
