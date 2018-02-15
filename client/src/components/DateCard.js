import React from 'react';

const DateCard = props => {
  return (
    <div key={props.date.id} className="date-card">
      <img src={'https://i.imgur.com/67HDqth.png'} />
      <h4>{props.date.title}</h4>
    </div>
  )
}

export default DateCard;
