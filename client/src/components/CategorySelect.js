import React from 'react';

export const CategorySelect = props => {
  let categoryOptions = [];

  if (props.categories) {
    for (let c of props.categories) {
      categoryOptions.push(<option key={c} value={c}>{c}</option>);
    }
  }

  let handleChange = function(index) {
    return function(event) {
      props.updateSpotAttributes(index, event);
    }
  }

  return (
    <div className="category-select">
      <label className="form-labels">Which category is this spot in?</label>
      <select
        name="category"
        value={props.selectedCategory}
        onChange={handleChange(props.spotIndex)}>
          <option value=""></option>
          {categoryOptions}
      </select>
    </div>
  )
}
