import React from 'react';
import CSSModules from 'react-css-modules';
import style from './calendarDay.css';

const CalendarDay = (props) => {
  let entryStatus= "test";
  return (
    <td styleName={entryStatus}>{props.value}</td>
  );
}

export default CSSModules(CalendarDay, style, {allowMultiple: true});