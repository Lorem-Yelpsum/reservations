import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import style from './calendar.css';

import CalendarWeek from './CalendarWeek.jsx';


class Calendar extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    const calendarDisplay = this.props.calendarDisplay ? 'calendar' : 'calendar-hidden';
    const calendarMonth = this.props.calendarMonth.map( week => {
      return <CalendarWeek week={week} testFunc={this.props.testFunc}/>
    });

    return (
      <div styleName={calendarDisplay}>
        <table>
          <thead>
          <tr>
            <td colSpan="1">«</td>
            <td colSpan="5" styleName="monthYear">December 2018</td>
            <td colSpan="1">»</td>
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
}

export default CSSModules(Calendar, style, {allowMultiple: true});

