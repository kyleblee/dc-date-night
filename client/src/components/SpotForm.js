import React from 'react';
import { CategorySelect } from './CategorySelect';

export const SpotForm = props => {
  return (
    <div className="spot-form">
      <h4>Spot #{props.index + 1}</h4>
      <label htmlFor="spot-title">What is the name of this spot?</label>
      <input type="text" value={props.title}/>
      <label htmlFor="spot-category">What kind of spot is this?</label>
      <CategorySelect categories={props.categories} spotIndex={props.index} selectedCategory={props.selectedCategory} updateSpotCategory={props.updateSpotCategory}/>
      <label htmlFor="spot-description">Describe this spot.</label>
      <textarea htmlFor="spot-description" value={props.description}></textarea>
    </div>
  )
}
