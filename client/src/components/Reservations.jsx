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
        <Calendar />
      </form>
    );
  }
}

export default Reservations;