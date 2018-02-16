import React from 'react';
import DateCard from './DateCard';

const DatesList = props => {
  const datesHTML = props.dates.map(date =>
    <DateCard date={date} key={date.id}/>
  );

  return (
    <div className='date-list'>
      {datesHTML}
    </div>
  );
}

export default DatesList;
