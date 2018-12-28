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
      today: new Date(),
      calendar: [],
      calendarDisplay: false
    }

    this.calendarToggle = this.calendarToggle.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    let calendarMonth = utils.generateCalendarMonth(this.state.today.getMonth(), this.state.today.getFullYear());
    this.setState({
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

  handleSubmit(e) {
    e.preventDefault();
    console.log('hi');
  }

  handleClick(e) {
    e.preventDefault();
    console.log('bye');
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
                  <input styleName="date-input" name="reservation_datetime_date" type="text" value="Thursday, December 27, 2018" onFocus={this.calendarToggle} onBlur={this.calendarToggle} readOnly/>
                  <Icon name={'14x14_triangle_down'} />
                </div>
                <div styleName="calendar-popup hidden-cal">
                  <Calendar calendarMonth={this.state.calendar} calendarDisplay={this.state.calendarDisplay} testFunc={this.handleClick}/>
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
