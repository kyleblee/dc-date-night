import React from 'react';

export const SpotCard = props => {
  return (
    <div className="spot-card">
      <h4>Spot #{props.index + 1}: {props.name}</h4>
      <img src={props.photo} alt={props.name} />
      <p>{props.description}</p>
    </div>
  )
}
