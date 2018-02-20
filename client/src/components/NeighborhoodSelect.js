import React from 'react';

export const NeighborhoodSelect = props => {
  let neighborhoodOptions = [];

  if (props.neighborhoods) {
    for (let n of props.neighborhoods) {
      neighborhoodOptions.push(<option key={n} value={n}>{n}</option>);
    }
  }

  return (
    <div className="neighborhood-select">
      <label className="main-labels">Pick a Neighborhood:</label>
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
