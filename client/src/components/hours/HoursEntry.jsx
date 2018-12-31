import React from 'react';
import CSSModules from 'react-css-modules';
import style from './hours.css';
import utils from '../../utils/calendar-helpers';

const moment = require('moment');

const HoursEntry = ({idx, isOpen, open_time, close_time, daysReordered}) => {
  let dayToday = new Date().getDay();

  return (
    <tr>
      <th scope="row">{`${utils.biz_hours_order[idx]}`}</th>
      <td>
        <span>
          {daysReordered[idx] ? `${moment(open_time, 'hh:mm:ss').format('h:mm a')} - ${moment(close_time, 'hh:mm:ss').format('h:mm a')}` : `Closed`}
        </span>
      </td>
      <td styleName="extra-cell">
        <span styleName={isOpen ? 'open-now' : 'closed-now'}>
          {dayToday === idx ? isOpen ? 'Open now' : 'Closed now' : null}
        </span>
      </td>
    </tr>
  );
}

export default CSSModules(HoursEntry, style, {allowMultiple: true});
