import React from 'react';

export const Errors = props => {
  if (props.errors) {
    return (
      <div className="errors">
        <p>{props.errors}</p>
      </div>
    )
  } else {
    return null;
  }
}
