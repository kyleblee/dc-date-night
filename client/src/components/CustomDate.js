import React from 'react';

const CustomDate = props => {
  if (props.customDate) {
    const spotsHTML = props.customDate.map((spot, index) => {
      return (
        <div className={'spot-' + index} key={index}>
          <h4>{spot.name} ({spot.category})</h4>
          {spot.description &&
            <p>{spot.description}</p>
          }
        </div>
      )
    });

    return (
      <div className="custom-date">
        <h2>Your date in: {props.customDate[0].neighborhood}</h2>
        {spotsHTML}
      </div>
    )
  } else {
    return null;
  }
}

export default CustomDate;
