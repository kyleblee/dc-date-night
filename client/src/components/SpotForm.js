import React from 'react';
import { CategorySelect } from './CategorySelect';

export const SpotForm = props => {

  let handleChange = function(index) {
    return function(event) {
      props.updateSpotAttributes(index, event);
    }
  }

  let handleDelete = function(index) {
    return function(event) {
      props.deleteSpot(index, event);
    }
  }

  return (
    <div className="spot-form">
      <h4>Spot #{props.index + 1}</h4>
      <label
        className="form-labels"
        htmlFor="spot-title">What is the name of this spot?</label>
      <input
        type="text"
        value={props.title}
        name="title"
        onChange={handleChange(props.index)} />
      <CategorySelect
        categories={props.categories}
        spotIndex={props.index}
        selectedCategory={props.selectedCategory}
        updateSpotAttributes={props.updateSpotAttributes}/>
      <label
        htmlFor="spot-description"
        className="form-labels">Describe this spot.</label>
      <textarea
        htmlFor="spot-description"
        value={props.description}
        name="description"
        onChange={handleChange(props.index)}></textarea>
        <img
          className="delete-button"
          src="https://i.imgur.com/rdvbV7K.png"
          onClick={handleDelete(props.index)} />
    </div>
  )
}
