import React from 'react';
import CSSModules from 'react-css-modules';
import utils from '../../utils/calendar-helpers.js';
import style from './calendarDay.css';

const CalendarDay = ({currMonth, day, currYear, dateSelected, handleDatePicker, days_open}) => {
  const dateFrom = new Date();
  const dateTo = utils.calculateDate61DaysAhead(dateFrom);
  const date = (day === null) ? null : new Date(currYear, currMonth, day);
  let checkDateWithinRange = false;
  let checkDateWithinDaysOpen = false;
  let date_td_style;
  
  if (day === null) {
    date_td_style = 'date-null';
  } else {
    checkDateWithinRange = utils.checkWithinDateRange(date, dateFrom, dateTo);
    checkDateWithinDaysOpen = utils.compareDateToDaysOpen(days_open, date);
    date_td_style = (checkDateWithinRange && checkDateWithinDaysOpen) ? 'date-enabled' : 'date-disabled';
    if (date_td_style === 'date-enabled') {
      utils.compareTwoDates(date, dateSelected) ? date_td_style += ' ' + 'date-selected' : null;
      utils.compareTwoDates(date, dateFrom) ? date_td_style += ' ' + 'date-today' : null;
    }
  }

  return (
    <td 
      styleName={date_td_style} 
      data-date={utils.formatDate(date)} 
      onClick={checkDateWithinRange && checkDateWithinDaysOpen ? handleDatePicker : null}>
      {day}
    </td>
  );
}

export default CSSModules(CalendarDay, style, {allowMultiple: true});
