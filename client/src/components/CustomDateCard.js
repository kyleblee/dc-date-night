import React from 'react';

const CustomDateCard = props => {
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

export default CustomDateCard;
