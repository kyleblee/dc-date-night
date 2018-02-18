import React from 'react';
import DateCard from './DateCard';

const DatesList = props => {
  let datesHTML;

  if (props.dates.length > 0) {
    datesHTML = props.dates.map(date =>
      <DateCard date={date} key={date.id}/>
    );
  } else {
    datesHTML = null;
  }

  return (
    <div className='date-list'>
      {datesHTML}
    </div>
  );
}

export default DatesList;
