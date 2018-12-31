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
      open_time: '',
      close_time: '',
      max_party: 0
    }
  }

  componentDidMount() {
    fetch(`/restaurantInfo/${window.rest_id}`)
    .then(response => {
      return response.json();
    }).then(results => {
      let {days_open, health_score, price_range, open_time, close_time, max_party} = results[0];
      this.setState({
        days_open: JSON.parse(days_open),
        price_range,
        health_score,
        open_time,
        close_time,
        max_party
      });
    });
  }

  render() {
    let {days_open, price_range, health_score, open_time, close_time, max_party} = this.state;
    let isOpen = moment().isBetween(moment(open_time, 'hh:mm:ss'), moment(close_time, 'hh:mm:ss'));

    return (
      <div id="sidebar">
        <Reservations days_open={days_open} max_party={max_party} open_time={open_time} close_time={close_time} />
        <Summary price_range={price_range} health_score={health_score} open_time={open_time} close_time={close_time} isOpen={isOpen} />
        <Hours days_open={days_open} open_time={open_time} close_time={close_time} isOpen={isOpen}/>
      </div>
    );
  }
}

export default Sidebar;