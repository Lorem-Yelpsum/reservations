import React from 'react';
import CalendarDay from './CalendarDay.jsx';

const CalendarWeek = (props) => {

  let weekDays = props.week.map( day => {
    return <CalendarDay value={day} testFunc={props.testFunc} />
  });

  return (
    <tr>
      {weekDays}
    </tr>
  );
}

export default CalendarWeek;