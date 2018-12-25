import React, { Component } from 'react';
import Reservations from './reservations/Reservations.jsx';
import Hours from './hours/Hours.jsx';
import Summary from './summary/Summary.jsx';

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div id="sidebar">
        <Reservations />
        <Hours />
        <Summary />
      </div>
    );
  }
}

export default Sidebar;