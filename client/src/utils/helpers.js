const totalDaysByMonthIndex = {
  0: 31,
  1: 28,
  2: 31,
  3: 30,
  4: 31,
  5: 30,
  6: 31,
  7: 31,
  8: 30,
  9: 31,
  10: 30,
  11: 31
};

const checkLeapYear = (year) => {
  return new Date(year, 1, 29).getDate() === 29;
};

const calculateMonthEntry = (indexOfFirstDay, indexOfLastDay, totalWeeks, collectionOfDays) => {

  let month = [];

  for (let weekCount = 0; weekCount < totalWeeks; weekCount++) {

    let week = [];

    if (weekCount === 0) {
      for (let weekIndex = 0; weekIndex <= 6; weekIndex++) {
        (indexOfFirstDay > weekIndex) ? 
          week.push(0) :  week = week.concat(collectionOfDays.splice(0, 1));
      }
    } else if (weekCount === totalWeeks - 1) {
      for (let weekIndex = 0; weekIndex <= 6; weekIndex++) {
        (indexOfLastDay >= weekIndex) ? 
          week = week.concat(collectionOfDays.splice(0, 1)) : week.push(0);
      }
    } else {
      week = week.concat(collectionOfDays.splice(0, 7));
    }

    month.push(week);
  }

  return month;
}


const generateCalendarMonth = (monthIndex, year) => {
  const indexOfFirstDay = new Date(year, monthIndex, 1).getDay();
  const indexOfLastDay = new Date(year, monthIndex + 1, 0).getDay();
  const totalNumberOfDays = (monthIndex === 1 && checkLeapYear(year)) ? 29 :  totalDaysByMonthIndex[monthIndex];
  const collectionOfDays = [];

  for (let day = 1; day <= totalNumberOfDays; day++) {
    collectionOfDays.push(day);
  }

  if (totalNumberOfDays === 28 || totalNumberOfDays === 29) {
    let totalWeeks = (totalNumberOfDays === 29) ? 5 : ((indexOfFirstDay === 0) ? 4 : 5);
    return calculateMonthEntry(indexOfFirstDay, indexOfLastDay, totalWeeks, collectionOfDays);
  }

  if (totalNumberOfDays === 30) {
    let totalWeeks = indexOfFirstDay < 6 ? 5 : 6;
    return calculateMonthEntry(indexOfFirstDay, indexOfLastDay, totalWeeks, collectionOfDays);
  }

    if (totalNumberOfDays === 31) {
    let totalWeeks = indexOfFirstDay < 5 ? 5 : 6;
    return calculateMonthEntry(indexOfFirstDay, indexOfLastDay, totalWeeks, collectionOfDays);
  }

  return null;
};

module.exports = {
  generateCalendarMonth
};