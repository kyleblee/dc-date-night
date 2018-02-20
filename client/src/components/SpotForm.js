import React from 'react';
import { CategorySelect } from './CategorySelect';

export const SpotForm = props => {
  
  let handleChange = function(index) {
    return function(event) {
      props.updateSpotAttributes(index, event);
    }
  }

  return (
    <div className="spot-form">
      <h4>Spot #{props.index + 1}</h4>
      <label
        htmlFor="spot-title">What is the name of this spot?</label>
      <input
        type="text"
        value={props.title}
        name="title"
        onChange={handleChange(props.index)} />
      <label
        htmlFor="spot-category">What kind of spot is this?</label>
      <CategorySelect
        categories={props.categories}
        spotIndex={props.index}
        selectedCategory={props.selectedCategory}
        updateSpotAttributes={props.updateSpotAttributes}/>
      <label
        htmlFor="spot-description">Describe this spot.</label>
      <textarea
        htmlFor="spot-description"
        value={props.description}
        name="description"
        onChange={handleChange(props.index)}></textarea>
    </div>
  )
}
