import React from 'react';

const CustomDateCard = props => {
  return (
    <div className={'spot-' + props.index} key={props.index}>
      <div className='spot-text'>
        <img className='spot-img' src='https://i.imgur.com/oezOPgE.png'/>
        <h4>{props.spot.name} ({props.spot.category})</h4>
        {props.spot.description &&
          <p>{props.spot.description}</p>
        }
      </div>
    </div>
  )
}

export default CustomDateCard;
