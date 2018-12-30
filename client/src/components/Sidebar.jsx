import React, { Component } from 'react';
import Reservations from './reservations/Reservations.jsx';
import Hours from './hours/Hours.jsx';
import Summary from './summary/Summary.jsx';

const moment = require('moment');


class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      days_open: {},
      price_range: '',
      health_score: '',
    }
  }

  componentDidMount() {
    fetch(`/restaurantInfo/${window.rest_id}`)
    .then(response => {
      return response.json();
    }).then(results => {
      let {days_open, health_score, price_range, open_time, close_time} = results[0];
      this.setState({
        days_open: JSON.parse(days_open),
        price_range,
        health_score,
        open_time,
        close_time
      });
    });
  }

  render() {
    let {days_open, price_range, health_score, open_time, close_time} = this.state;
    return (
      <div id="sidebar">
        <Reservations days_open={days_open}/>
        <Summary price_range={price_range} health_score={health_score} opening={open_time} closing={close_time} />
        <Hours days_open={days_open}/>
      </div>
    );
  }
}

export default Sidebar;