import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import style from './reservations.css';
import Icon from '../icons/Icon.jsx';
import Calendar from './Calendar.jsx';
import Select from './Select.jsx';

import utils from '../../utils/calendar-helpers.js';

class Reservations extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currMonth: null,
      currYear: null,
      calendar: [],
      calendarDisplay: false,
      dateSelected: new Date(),
      timeSelected: null,
      partySelected: null,
    }

    this.calendarToggle = this.calendarToggle.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlePrevMonth = this.handlePrevMonth.bind(this);
    this.handleNextMonth = this.handleNextMonth.bind(this);
    this.handleDatePicker = this.handleDatePicker.bind(this);
  }

  componentDidMount() {
    const today = new Date();
    const calendarMonth = utils.generateCalendarMonth(today.getMonth(), today.getFullYear());
    this.setState({
      currMonth: today.getMonth(),
      currYear: today.getFullYear(),
      calendar: calendarMonth
    });
  }

  calendarToggle() {
    this.setState(prevState => {
      return {
        calendarDisplay: !prevState.calendarDisplay
      }
    });
  }

  handlePrevMonth(e) {
    e.stopPropagation();
    let month = this.state.currMonth === 0 ? 11 : this.state.currMonth - 1;
    let year = month === 11 ? this.state.currYear - 1 : this.state.currYear;
    let calendarMonth = utils.generateCalendarMonth(month, year);

    this.setState({
      currMonth: month,
      currYear: year,
      calendar: calendarMonth
    });
  }

  handleNextMonth(e) {
    e.stopPropagation();
    let month = this.state.currMonth === 11 ? 0 : this.state.currMonth + 1;
    let year = month === 0 ? this.state.currYear + 1 : this.state.currYear;
    let calendarMonth = utils.generateCalendarMonth(month, year);

    this.setState({
      currMonth: month,
      currYear: year,
      calendar: calendarMonth
    });
  }

  handleDatePicker(e) {
    e.stopPropagation();
    this.setState({
      dateSelected: new Date(e.target.dataset.date),
      calendarDisplay: false
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log('hi');
  }

  render() {
    return (
      <div styleName="reservations-container">
        <h3>
          <Icon name={'24x24_reservation'}/>
          <a href="#" styleName="reservation-header-link">Make a Reservation</a>
        </h3>
        <div styleName="reservations-form-container">
          <form styleName="reservation-availability-form" method="POST" name="reservation-availability-form">
            <ul styleName="reservation-fields">
              <li styleName="date-picker">
                <div styleName="yselect">
                  <Icon name={'18x18_reservation'} />
                  <input 
                    styleName="date-input" 
                    name="reservation_datetime_date" 
                    type="text" 
                    value={utils.formatDateInputValue(this.state.dateSelected)} 
                    onClick={this.calendarToggle} 
                    readOnly
                    />
                  <Icon name={'14x14_triangle_down'} />
                </div>
                <div styleName="calendar-popup hidden-cal">
                  <Calendar 
                    calendar={this.state.calendar} 
                    calendarDisplay={this.state.calendarDisplay}
                    currMonth={this.state.currMonth}
                    currYear={this.state.currYear}
                    dateSelected={this.state.dateSelected}
                    handlePrevMonth={this.handlePrevMonth} 
                    handleNextMonth={this.handleNextMonth} 
                    handleDatePicker={this.handleDatePicker}
                    />
                </div>
              </li>
              <li styleName="time-picker">
                <div styleName="yselect">
                  <Icon name={'18x18_clock'}/>
                  <Select />
                  <Icon name={'14x14_triangle_down'} />
                </div>
              </li>
              <li styleName="people-picker">
                <div styleName="yselect">
                  <Icon name={'18x18_friends'} />
                  <Select />
                  <Icon name={'14x14_triangle_down'} />
                </div>
              </li>
            </ul>
            <button styleName="find-table-button" onClick={this.handleSubmit}>Find a Table</button>
          </form>
        </div>
      </div>
    );
  }
}

export default CSSModules(Reservations, style, {allowMultiple: true});
