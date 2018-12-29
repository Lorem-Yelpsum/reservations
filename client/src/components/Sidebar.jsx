import React from 'react';
import Reservations from './reservations/Reservations.jsx';
import Hours from './hours/Hours.jsx';
import Summary from './summary/Summary.jsx';

const Sidebar = () => (
    <div id="sidebar">
      <Reservations />
      <Summary />
      <Hours />
    </div>
  );

export default Sidebar;