import React from 'react';
import CalendarDay from './CalendarDay.jsx';

const CalendarWeek = ({week, currYear, currMonth, dateSelected, handleDatePicker, days_open}) => {
  let weekDays = week.map( (day, index) => {
    return <CalendarDay 
            currMonth={currMonth} 
            day={day} 
            currYear={currYear}
            dateSelected={dateSelected} 
            handleDatePicker={handleDatePicker}
            days_open={days_open} 
            key={index}
            />
  });

  return (
    <tr>
      {weekDays}
    </tr>
  );
}

export default CalendarWeek;
