import React from 'react';
import { CategorySelect } from './CategorySelect';
import PropTypes from 'prop-types';

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

  let handlePhotoUpload = function(index) {
    return function(event) {
      props.updateSpotPhoto(index, event)
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
        className="form-labels">Describe this spot and why it's awesome.</label>
      <textarea
        htmlFor="spot-description"
        value={props.description}
        name="description"
        onChange={handleChange(props.index)}></textarea>
      <input
        id={`spotPhoto${props.index}`}
        name={`spotPhoto${props.index}`}
        type="file"
        ref={props.photoRef}
        multiple={true}
        onChange={handlePhotoUpload(props.index)} />
        <img
          className="delete-button"
          src="https://i.imgur.com/rdvbV7K.png"
          onClick={handleDelete(props.index)}
          alt="delete button"/>
    </div>
  )
}

SpotForm.propTypes = {
  updateSpotAttributes: PropTypes.func.isRequired,
  deleteSpot: PropTypes.func.isRequired,
  updateSpotPhoto: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  title: PropTypes.string,
  description: PropTypes.string,
  categories: PropTypes.arrayOf(PropTypes.string),
  selectedCategory: PropTypes.string,
  photoRef: PropTypes.func
}
