import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import Icon from '../icons/Icon.jsx';
import style from './hours.css';
import utils from '../../utils/calendar-helpers';

import HoursEntry from './HoursEntry.jsx';

const Hours = ({days_open, open_time, close_time, isOpen}) => {
  let daysReordered = utils.reorderDaysToStartOnMonday(days_open);
  let biz_hours = daysReordered.map( (day, index) => {
    return <HoursEntry key={index} isOpen={isOpen} open_time={open_time} close_time={close_time} daysReordered={daysReordered} idx={index} />
  });

  return (
    <div styleName="biz-hours">
        <h3 styleName="biz-hours-header">Hours</h3>
        <table styleName="hours-table">
          <tbody>
            {biz_hours}
          </tbody>
        </table>
        <div styleName="biz-info-link">
          <Icon name={`14x14_pencil`} />
          <a href='#' styleName="biz-link">Edit business info</a>
        </div>
      </div>
  );
}

export default CSSModules(Hours, style, {allowMultiple: true});