import React from 'react';

export const CategoryCheckboxes = props => {
  let categoryCheckboxes = []

  if (props.categories && props.categories.length > 0) {

    for (let c of props.categories) {
      categoryCheckboxes.push(
        <div>
          <input key={"category-" + c} name={c} type="checkbox" checked={props.activities.includes(c)} onChange={props.addOrRemoveActivity} />
          <label htmlFor={"category-" + c}>{c}</label>
        </div>
      )
    }
  } else {
    categoryCheckboxes = <p>Oops... There aren't any activities for this neighborhood. Maybe Netflix and chill?</p>
  }

  return (
    <div className="category-selects">
      <label className="main-labels">Choose a few activities:</label>
      <div className="category-options">
        {categoryCheckboxes}
      </div>
    </div>
  )
}
