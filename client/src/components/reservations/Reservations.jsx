import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import style from './reservations.css';
import Icon from '../icons/Icon.jsx';
import Calendar from './Calendar.jsx';

class Reservations extends Component {
  constructor(props) {
    super(props)
    this.state = {
      date: new Date(),
      activeDay: new Date(),
      calendar: [],
      timeslot: '',
      party: 1
    }
  }

  componentDidMount() {}

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
                  <input styleName="date-input" name="reservation_datetime_date" type="text" value="Thursday, December 27, 2018" readOnly/>
                  <Icon name={'14x14_triangle_down'} />
                </div>
                <div styleName="calendar-popup hidden-cal">
                  <div></div>
                  <Calendar />
                </div>
              </li>
              <li styleName="time-picker">
                <div styleName="yselect">
                  <Icon name={'18x18_clock'}/>
                  <select name="select-time">
                    <option value="8:00 am">8:00 am</option>
                    <option value="8:30 am">8:30 am</option>
                    <option value="9:00 am">9:00 am</option>
                    <option value="9:30 am">9:30 am</option>
                    <option value="8:00 pm">8:00 pm</option>
                    <option value="9:00 pm">9:00 pm</option>
                    <option value="10:00 pm">10:00 pm</option>
                  </select>
                  <Icon name={'14x14_triangle_down'} />
                </div>
              </li>
              <li styleName="people-picker">
                <div styleName="yselect">
                  <Icon name={'18x18_friends'} />
                  <select name="select-size">
                    <option value="1">1 people</option>
                    <option value="2">2 people</option>
                    <option value="3">3 people</option>
                    <option value="4">4 people</option>
                    <option value="5">5 people</option>
                    <option value="6">6 people</option>
                    <option value="7">7 people</option>
                    <option value="8">8 people</option>
                    <option value="9">9 people</option>
                    <option value="10">10 people</option>
                    <option value="11">11 people</option>
                    <option value="12">12 people</option>
                    <option value="13">13 people</option>
                    <option value="14">14 people</option>
                  </select>
                  <Icon name={'14x14_triangle_down'} />
                </div>
              </li>
            </ul>
            <button styleName="find-table-button">Find a Table</button>
          </form>
        </div>
      </div>
    );
  }
}

export default CSSModules(Reservations, style, {allowMultiple: true});