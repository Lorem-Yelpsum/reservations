import React from 'react';
import CSSModules from 'react-css-modules';
import style from './calendar.css';
import utils from '../../utils/calendar-helpers.js';
import CalendarWeek from './CalendarWeek.jsx';

const Calendar = (props) => {
  let {calendar, calendarDisplay, currMonth, currYear, dateSelected, handleNextMonth, handlePrevMonth, handleDatePicker} = props;

  const calendarMonth = calendar.map( (week, index) => {
    return <CalendarWeek 
            week={week} 
            currMonth={currMonth} 
            currYear={currYear} 
            handleDatePicker={handleDatePicker}
            dateSelected={dateSelected}
            key={index}
            />
  });

  return (
    <div styleName={calendarDisplay ? 'calendar' : 'calendar-hidden'}>
      <table>
        <thead>
        <tr>
          <td colSpan="1" styleName="month-change-cell" onClick={handlePrevMonth}>«</td>
          <td colSpan="5" styleName="monthYear">{`${utils.monthByIndex[currMonth]} ${currYear}`}</td>
          <td colSpan="1" styleName="month-change-cell" onClick={handleNextMonth}>»</td>
        </tr>
        </thead>
        <tbody>
          <tr>
            <th>S</th>
            <th>M</th>
            <th>T</th>
            <th>W</th>
            <th>T</th>
            <th>F</th>
            <th>S</th>
          </tr>
          {calendarMonth}
        </tbody>
      </table>
    </div>
  );
}

export default CSSModules(Calendar, style, {allowMultiple: true});
