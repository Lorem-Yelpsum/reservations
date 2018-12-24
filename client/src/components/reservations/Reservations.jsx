import React, { Component } from 'react';
import Calendar from './Calendar.jsx';

class Reservations extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {}

  render() {
    return (
      <form id="reservations">

        <div className="reservation-header" >
          <img className="cal-icon1" src="./img/reservation1.png" alt=""/>  
          <h3><a href="#">Make a Reservation</a></h3>
        </div>

        <div className="yselect">
          <img className="cal-icon2" src="./img/reservation1.png" alt=""/>
          <input className="date-input reservation-input" name="reservation_date" type="text" value="Sunday, December 23, 2018" readOnly />
          <i className="fas fa-caret-down"></i>
        </div>

        <div className="time-and-size">
          <div className="timeslots">
            <img className="clock-icon" src="./img/clock.png" alt=""/>
            <select name="select-time">
              <option value="8:00 am">8:00 am</option>
              <option value="8:30 am">8:30 am</option>
              <option value="9:00 am">9:00 am</option>
              <option value="9:30 am">9:30 am</option>
              <option value="8:00 pm">8:00 pm</option>
              <option value="9:00 pm">9:00 pm</option>
              <option value="10:00 pm">10:00 pm</option>
            </select>
            <i className="fas fa-caret-down"></i>
          </div>
          
          <div className="party-size">
            <img className="party-icon" src="./img/party.png" alt=""/>
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
            <i className="fas fa-caret-down"></i>
          </div>
          
        </div>
        <div>
          <button className="find-table-button">Find a Table</button>
        </div>
      </form>
    );
  }
}

export default Reservations;