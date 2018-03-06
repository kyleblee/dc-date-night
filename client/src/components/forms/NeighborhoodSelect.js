import React from 'react';
import PropTypes from 'prop-types';

export const NeighborhoodSelect = props => {
  let neighborhoodOptions = [];

  if (props.neighborhoods) {
    for (let n of props.neighborhoods) {
      neighborhoodOptions.push(<option key={n} value={n}>{n}</option>);
    }
  }

  return (
    <div className="neighborhood-select">
      <label className="form-labels">{props.labelText}</label>
      <select
        name="neighborhood"
        value={props.selectedNeighborhood}
        onChange={props.updateNeighborhood}>
          <option value=""></option>
          {neighborhoodOptions}
      </select>
    </div>
  )
}

NeighborhoodSelect.propTypes = {
  neighborhoods: PropTypes.arrayOf(PropTypes.string).isRequired,
  labelText: PropTypes.string.isRequired,
  updateNeighborhood: PropTypes.func.isRequired
}
