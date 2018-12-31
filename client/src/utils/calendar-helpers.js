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

const monthByIndex = {
  0: 'January',
  1: 'February',
  2: 'March',
  3: 'April',
  4: 'May',
  5: 'June',
  6: 'July',
  7: 'August',
  8: 'September',
  9: 'October',
  10: 'November',
  11: 'December'
};

const dayByIndex = {
  0: 'Sunday',
  1: 'Monday',
  2: 'Tuesday',
  3: 'Wednesday',
  4: 'Thursday',
  5: 'Friday',
  6: 'Saturday'
}

const biz_hours_order = {
  0: 'Mon',
  1: 'Tues',
  2: 'Wed',
  3: 'Thurs',
  4: 'Fri',
  5: 'Sat',
  6: 'Sun'
}

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
          week.push(null) :  week = week.concat(collectionOfDays.splice(0, 1));
      }
    } else if (weekCount === totalWeeks - 1) {
      for (let weekIndex = 0; weekIndex <= 6; weekIndex++) {
        (indexOfLastDay >= weekIndex) ? 
          week = week.concat(collectionOfDays.splice(0, 1)) : week.push(null);
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
  const collectionOfDays = Array.from(new Array(totalNumberOfDays), (val, index) => index + 1);

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

const calculateDate61DaysAhead = (dateFrom) => {
  let dateTo = new Date(dateFrom.getFullYear(), dateFrom.getMonth(), dateFrom.getDate() + 61);
  return dateTo;
}
const formatDate = (date) => {
  return (date instanceof Date) ? date.toLocaleDateString() : null;
}

const checkWithinDateRange = (c, d1, d2) => {
  let checkDate = new Date(c.getFullYear(), c.getMonth(), c.getDate());
  let from = new Date(d1.getFullYear(), d1.getMonth(), d1.getDate());
  let to = new Date(d2.getFullYear(), d2.getMonth(), d2.getDate());
  
  return from <= checkDate && checkDate <= to;
}

const formatDateInputValue = (date) => {
  return `${dayByIndex[date.getDay()]}, ${monthByIndex[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`
}

const compareTwoDates = (d1, d2) => {
  return d1.toLocaleDateString() === d2.toLocaleDateString();
}

const compareDateToDaysOpen = (days_open, date) => {
  if (Object.keys(days_open).length) {
    return days_open[date.getDay()];
  }
  return false;
}

const reorderDaysToStartOnMonday = (days_open) => {
  let days_open_reordered = Object.values(days_open);
  let temp = days_open_reordered.shift();
  days_open_reordered.push(temp);
  return days_open_reordered;
}

module.exports = {
  checkLeapYear,
  calculateMonthEntry,
  generateCalendarMonth,
  monthByIndex,
  calculateDate61DaysAhead,
  formatDate,
  checkWithinDateRange,
  formatDateInputValue,
  compareTwoDates,
  compareDateToDaysOpen,
  biz_hours_order,
  reorderDaysToStartOnMonday
};
