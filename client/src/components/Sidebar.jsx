import React, { Component } from 'react';
import Reservations from './reservations/Reservations.jsx';
import Hours from './hours/Hours.jsx';
import Summary from './summary/Summary.jsx';

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  componentDidMount() {
    fetch('/restaurant/:rest_id').then(response => {
      return response.json();
    }).then(results => {
      console.log(results);
    })
  }

  render() {
    return (
      <div id="sidebar">
        <Reservations />
        <Summary />
        <Hours />
      </div>
    );
  }
}

export default Sidebar;