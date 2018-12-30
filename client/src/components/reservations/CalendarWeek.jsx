import React from 'react';
import CalendarDay from './CalendarDay.jsx';

const CalendarWeek = ({week, currYear, currMonth, dateSelected, handleDatePicker}) => {

  let weekDays = week.map( day => {
    return <CalendarDay 
            currMonth={currMonth} 
            day={day} 
            currYear={currYear}
            dateSelected={dateSelected} 
            handleDatePicker={handleDatePicker} />
  });

  return (
    <tr>
      {weekDays}
    </tr>
  );
}

export default CalendarWeek;