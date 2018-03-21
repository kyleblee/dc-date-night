import React from 'react';

export const ShowDateOptions = props => {
  if (parseInt(sessionStorage.id, 10) === props.date.expert_id) {
    return (
      <div className="option-buttons">
        <button onClick={props.handleEditButton}>Edit Date</button>
        <button onClick={props.handleDeleteButton}>Delete Date</button>
      </div>
    )
  } else {
    return null;
  }
}
