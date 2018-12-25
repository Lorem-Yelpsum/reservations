import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import style from './summary.css';

class Summary extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div styleName="island-summary">
        <ul>
          <li>
            <div></div>
            <div>
              <dl>
                <dt>Today</dt>
                <dd><span>8:00 am</span> - <span>10:00 pm</span><span>Open now</span></dd>
              </dl>
            </div>
          </li>
          <li>
            <div></div>
            <div>
              <a href="#" styleName="menu-link">Full menu <i styleName="share-icon" className="fas fa-share-square"></i></a>
            </div>
          </li>
          <li>
            <div></div>
            <div>
              <dl>
                <dt>Price range</dt>
                <dd>$11-30</dd>
              </dl>
            </div>
          </li>
          <li>
            <div></div>
            <div>
              <dl>
                <dt><a styleName="health-score-link" href='#'>Health Score</a></dt>
                <dd>77 out of 100</dd>
              </dl>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

export default CSSModules(Summary, style, {allowMultiple: true});