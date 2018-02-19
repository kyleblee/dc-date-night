import React from 'react';

const DateCard = props => {
  return (
    <div key={props.date.id} className="date-card">
      <img src={'https://i.imgur.com/67HDqth.png'} alt="two people on a date over coffee" />
      <h4>{props.date.title}</h4>
    </div>
  )
}

export default DateCard;
