import React from 'react';
import CSSModules from 'react-css-modules';
import utils from '../../utils/calendar-helpers.js';
import style from './calendarDay.css';

const CalendarDay = ({currMonth, day, currYear, dateSelected, handleDatePicker}) => {
  const dateFrom = new Date();
  const dateTo = utils.calculateDateTo(dateFrom);
  let checkDateWithinRange = false;
  let date;
  let date_td_style;
  
  if (day === null) {
    date = null;
    date_td_style = 'date-null';
  } else {
    date = new Date(currYear, currMonth, day);
    checkDateWithinRange = utils.checkWithinDateRange(date, dateFrom, dateTo);
    date_td_style = (checkDateWithinRange) ? 'date-enabled' : 'date-disabled';

    if (utils.compareTwoDates(date, dateSelected)) {
      date_td_style += ' ' + 'date-selected';
    } 
    
    if (utils.compareTwoDates(date, dateFrom)) {
      date_td_style += ' ' + 'date-today';
    }
  }

  return (
    <td 
      styleName={date_td_style} 
      data-date={utils.formatDate(date)} 
      onClick={checkDateWithinRange ? handleDatePicker : null}>
      {day}
    </td>
  );
}

export default CSSModules(CalendarDay, style, {allowMultiple: true});