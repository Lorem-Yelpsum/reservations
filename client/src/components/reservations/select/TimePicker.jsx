import React from 'react';
const moment = require('moment');

const TimePicker = ({open_time, close_time, handleTimePicker}) => {
  let timeslots = [];
  let lastTimeSlot = moment(close_time, 'hh:mm:ss').format('h:mm a');
  let tempTime = moment(open_time, 'hh:mm:ss').format('h:mm a');

  while (tempTime !== lastTimeSlot) {
    timeslots.push(tempTime);
    tempTime = moment(tempTime, 'h:mm a').add(30, 'minutes').format('h:mm a')
  }

  let options = timeslots.map((time, index) => {
    return <option key={index} value={moment(time, 'h:mm a').format('HH:mm:ss')}>{time}</option>
  });

  return (
    <select onChange={handleTimePicker}>
      {options}
    </select>
  );
}

export default TimePicker;