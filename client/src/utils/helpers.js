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

console.log('2018 CALENDAR DESCENDING BY MONTH');
console.log(generateCalendarMonth(11, 2018));
console.log(generateCalendarMonth(10, 2018));
console.log(generateCalendarMonth(9, 2018));
console.log(generateCalendarMonth(8, 2018));
console.log(generateCalendarMonth(7, 2018));
console.log(generateCalendarMonth(6, 2018));
console.log(generateCalendarMonth(5, 2018));
console.log(generateCalendarMonth(4, 2018));
console.log(generateCalendarMonth(3, 2018));
console.log(generateCalendarMonth(2, 2018));
console.log(generateCalendarMonth(1, 2018));
console.log(generateCalendarMonth(0, 2018));
console.log('/////////////////////')
console.log('2017 CALENDAR DESCENDING BY MONTH');
console.log(generateCalendarMonth(11, 2017));
console.log(generateCalendarMonth(10, 2017));
console.log(generateCalendarMonth(9, 2017));
console.log(generateCalendarMonth(8, 2017));
console.log(generateCalendarMonth(7, 2017));
console.log(generateCalendarMonth(6, 2017));
console.log(generateCalendarMonth(5, 2017));
console.log(generateCalendarMonth(4, 2017));
console.log(generateCalendarMonth(3, 2017));
console.log(generateCalendarMonth(2, 2017));
console.log(generateCalendarMonth(1, 2017));
console.log(generateCalendarMonth(0, 2017));
console.log('/////////////////////')
console.log('2016 CALENDAR DESCENDING BY MONTH');
console.log(generateCalendarMonth(11, 2016));
console.log(generateCalendarMonth(10, 2016));
console.log(generateCalendarMonth(9, 2016));
console.log(generateCalendarMonth(8, 2016));
console.log(generateCalendarMonth(7, 2016));
console.log(generateCalendarMonth(6, 2016));
console.log(generateCalendarMonth(5, 2016));
console.log(generateCalendarMonth(4, 2016));
console.log(generateCalendarMonth(3, 2016));
console.log(generateCalendarMonth(2, 2016));
console.log(generateCalendarMonth(1, 2016));
console.log(generateCalendarMonth(0, 2016));
console.log('/////////////////////')
console.log('2015 CALENDAR DESCENDING BY MONTH');
console.log(generateCalendarMonth(11, 2015));
console.log(generateCalendarMonth(10, 2015));
console.log(generateCalendarMonth(9, 2015));
console.log(generateCalendarMonth(8, 2015));
console.log(generateCalendarMonth(7, 2015));
console.log(generateCalendarMonth(6, 2015));
console.log(generateCalendarMonth(5, 2015));
console.log(generateCalendarMonth(4, 2015));
console.log(generateCalendarMonth(3, 2015));
console.log(generateCalendarMonth(2, 2015));
console.log(generateCalendarMonth(1, 2015));
console.log(generateCalendarMonth(0, 2015));



// LEAP YEARS
console.log('LEAP YEARS LEAP YEARS LEAP YEARS LEAP YEARS LEAP YEARS')
console.log('2012')
console.log(generateCalendarMonth(1, 2012));
console.log('2016')
console.log(generateCalendarMonth(1, 2016));
console.log('2020')
console.log(generateCalendarMonth(1, 2020));
console.log('2024')
console.log(generateCalendarMonth(1, 2024));
console.log('2028')
console.log(generateCalendarMonth(1, 2028));
console.log('2032')
console.log(generateCalendarMonth(1, 2032));
console.log('2036')
console.log(generateCalendarMonth(1, 2036));
console.log('2040')
console.log(generateCalendarMonth(1, 2040));
console.log('2044')
console.log(generateCalendarMonth(1, 2044));
console.log('2048')
console.log(generateCalendarMonth(1, 2048));

module.exports = {
  generateCalendarMonth
};