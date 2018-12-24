import React, { Component } from 'react';

class Summary extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="island summary">
      <ul>
        <li>
          <dl>
            <dt>Today</dt>
            <dd>
              <span>8:00 am</span>
              -
              <span>10:00 pm</span>
            </dd>
          </dl>
        </li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
    );
  }
}

export default Summary;