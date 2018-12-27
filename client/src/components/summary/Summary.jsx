import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import style from './summary.css';
import Icon from '../icons/Icon.jsx';

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
            <div styleName="li-item-icon">
              <Icon name={'24x24_clock'}/>
            </div>
            <div styleName="li-underline li-description">
              <dl>
                <dt>Today</dt>
                <dd><span>8:00 am - 10:00 pm</span> <span styleName="biz-open">Open now</span></dd>
              </dl>
            </div>
          </li>
          <li>
            <div styleName="li-item-icon">
              <Icon name={'24x24_food'} />
            </div>
            <div styleName="li-underline li-description li-full-menu">
              <a href="#" styleName="menu-link">Full menu</a>
              <Icon name={`24x24_external_link`}/>
            </div>
          </li>
          <li>
            <div styleName="li-item-icon">
              <Icon name={'dollarsign_2'} />
            </div>
            <div styleName="li-underline li-description">
              <dl>
                <dt>Price range</dt>
                <dd>$11-30</dd>
              </dl>
            </div>
          </li>
          <li>
            <div styleName="li-item-icon">
              <Icon name={'24x24_medical'} />
            </div>
            <div styleName="li-description">
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