import React from 'react';

export const SpotForm = props => {
  return (
    <div className="spot-form">
      <h4>Spot #{props.index}</h4>
      <label htmlFor="spot-title">What is the name of this spot?</label>
      <input type="text" value={props.title}/>
      <label htmlFor="spot-category">What kind of spot is this?</label>
      <select id="spot-category">
        <option>Replace me with categoryChoices passed in via props.</option>
      </select>
      <label htmlFor="spot-description">Describe this spot.</label>
      <textarea htmlFor="spot-description" value={props.description}></textarea>
    </div>
  )
}
