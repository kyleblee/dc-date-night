import React from 'react';
import { Link } from 'react-router-dom';

export const DateCard = props => {
  return (
    <div key={props.date.id} className="date-card">
      <img src={props.date.cover_photo} alt="two people on a date over coffee" />
      <Link to={`/dates/${props.date.id}`}><h4>{props.date.title}</h4></Link>
    </div>
  )
}
