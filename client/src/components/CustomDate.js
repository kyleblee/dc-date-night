import React from 'react';
import CustomDateCard from './CustomDateCard';

const CustomDate = props => {
  if (props.customDate) {
    const spotsHTML = props.customDate.map((spot, index) =>
        <CustomDateCard spot={spot} index={index} />
      );

    return (
      <div className="custom-date">
        <h3>Your date in:</h3>
        <h2>{props.customDate[0].neighborhood}</h2>
        {spotsHTML}
        <button className="start-over-button" onClick={props.resetGenerate}>
          Nah, new date.
        </button>
      </div>
    )
  } else {
    return null;
  }
}

export default CustomDate;