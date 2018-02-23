import React from 'react';

const DateCard = props => {
  return (
    <div key={props.date.id} className="date-card">
      <img src={props.date.cover_photo} alt="two people on a date over coffee" />
      <h4>{props.date.title}</h4>
    </div>
  )
}

export default DateCard;
