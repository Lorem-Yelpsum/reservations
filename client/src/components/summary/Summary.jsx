import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import style from './summary.css';
import Icon from '../icons/Icon.jsx';

const moment = require('moment');

const Summary = ({price_range, health_score, open_time, close_time, isOpen}) => {
  let price_scale = {
    'Under $10': 'dollarsign_1',
    '$11-30': 'dollarsign_2',
    '$31-60': 'dollarsign_3',
    'Above $61': 'dollarsign_4'
  }

  return (
    <div styleName="island-summary">
        <ul>
          <li>
            <div styleName="li-item-icon">
              <Icon name={'24x24_clock'} fill={isOpen ? '#41a700' : '#d32323'} />
            </div>
            <div styleName="li-underline li-description">
              <dl>
                <dt>Today</dt>
                <dd>
                  <span>{`${moment(open_time, 'hh:mm:ss').format('h:mm a')} - ${moment(close_time, 'hh:mm:ss').format('h:mm a')}`}</span>
                  &nbsp;
                  <span styleName={isOpen ? 'biz-open' : 'biz-closed'}>{isOpen ? 'Open now' : 'Closed now'}</span>
                </dd>
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
              <Icon name={`${price_scale[price_range]}`} />
            </div>
            <div styleName="li-underline li-description">
              <dl>
                <dt>Price range</dt>
                <dd>{price_range}</dd>
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
                <dd>{`${health_score} out of 100`}</dd>
              </dl>
            </div>
          </li>
        </ul>
      </div>
  );
}

export default CSSModules(Summary, style, {allowMultiple: true});