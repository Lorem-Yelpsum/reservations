import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import style from './calendar.css';
import utils from '../../utils/calendar-helpers.js';

import CalendarWeek from './CalendarWeek.jsx';


class Calendar extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    const calendarDisplay = this.props.calendarDisplay ? 'calendar' : 'calendar-hidden';
    const calendar = this.props.calendar.map( week => {
      return <CalendarWeek week={week} />
    });

    return (
      <div styleName={calendarDisplay}>
        <table>
          <thead>
          <tr>
            <td colSpan="1" styleName="month-change-cell" onClick={this.props.handlePrevMonth}>«</td>
            <td colSpan="5" styleName="monthYear">{`${utils.monthByIndex[this.props.currMonth]} ${this.props.currYear}`}</td>
            <td colSpan="1" styleName="month-change-cell" onClick={this.props.handleNextMonth}>»</td>
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
            {calendar}
          </tbody>
        </table>
      </div>
    );
  }
}

export default CSSModules(Calendar, style, {allowMultiple: true});

