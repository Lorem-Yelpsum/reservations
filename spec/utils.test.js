const utils = require('../client/src/utils/calendar-helpers.js');

  describe('checks if given year is a valid leap year', () => {
    test('checks for truthy leap years', () => {
      expect(utils.checkLeapYear(2012)).toBeTruthy();
      expect(utils.checkLeapYear(2016)).toBeTruthy();
      expect(utils.checkLeapYear(2048)).toBeTruthy();
    });
  
    test('checks for falsy leap years', () => {
      expect(utils.checkLeapYear(2013)).toBeFalsy();
      expect(utils.checkLeapYear(2017)).toBeFalsy();
      expect(utils.checkLeapYear(2049)).toBeFalsy();
    });
  });

  describe('formats calendar month given index of first and last day, number of week rows, and array of numbered days in the month', () => {
  
    test('creates valid 2D array of calendar months of 31 days starting and ending on given weekdays', () => {
      const MonthStartingOnASatWith31Days = [
        [ null, null, null, null, null, null, 1 ],
        [ 2, 3, 4, 5, 6, 7, 8 ],
        [ 9, 10, 11, 12, 13, 14, 15 ],
        [ 16, 17, 18, 19, 20, 21, 22 ],
        [ 23, 24, 25, 26, 27, 28, 29 ],
        [ 30, 31, null, null, null, null, null ]
      ];
    
      const MonthStartingOnASunWith31Days = [
        [ 1, 2, 3, 4, 5, 6, 7 ],
        [ 8, 9, 10, 11, 12, 13, 14 ],
        [ 15, 16, 17, 18, 19, 20, 21 ],
        [ 22, 23, 24, 25, 26, 27, 28 ],
        [ 29, 30, 31, null, null, null, null ]
      ];
    
      const MonthStartingOnAWedWith31Days = [
        [ null, null, null, 1, 2, 3, 4 ],
        [ 5, 6, 7, 8, 9, 10, 11 ],
        [ 12, 13, 14, 15, 16, 17, 18 ],
        [ 19, 20, 21, 22, 23, 24, 25 ],
        [ 26, 27, 28, 29, 30, 31, null ]
      ];

      expect(utils.calculateMonthEntry(6, 1, 6, Array.from(new Array(31), (val, index) => index + 1))).toEqual(MonthStartingOnASatWith31Days);
      expect(utils.calculateMonthEntry(0, 2, 5, Array.from(new Array(31), (val, index) => index + 1))).toEqual(MonthStartingOnASunWith31Days);
      expect(utils.calculateMonthEntry(3, 5, 5, Array.from(new Array(31), (val, index) => index + 1))).toEqual(MonthStartingOnAWedWith31Days);
    });

    test('creates valid 2D array of calendar months of 30 days starting and ending on given weekdays', () => {
      const MonthStartingOnASatWith30Days = [
        [ null, null, null, null, null, null, 1 ],
        [ 2, 3, 4, 5, 6, 7, 8 ],
        [ 9, 10, 11, 12, 13, 14, 15 ],
        [ 16, 17, 18, 19, 20, 21, 22 ],
        [ 23, 24, 25, 26, 27, 28, 29 ],
        [ 30, null, null, null, null, null, null ]
      ];
    
      const MonthStartingOnASunWith30Days = [
        [ 1, 2, 3, 4, 5, 6, 7 ],
        [ 8, 9, 10, 11, 12, 13, 14 ],
        [ 15, 16, 17, 18, 19, 20, 21 ],
        [ 22, 23, 24, 25, 26, 27, 28 ],
        [ 29, 30, null, null, null, null, null ]
      ];
    
      const MonthStartingOnAWedWith30Days = [
        [ null, null, null, 1, 2, 3, 4 ],
        [ 5, 6, 7, 8, 9, 10, 11 ],
        [ 12, 13, 14, 15, 16, 17, 18 ],
        [ 19, 20, 21, 22, 23, 24, 25 ],
        [ 26, 27, 28, 29, 30, null, null ]
      ];

      expect(utils.calculateMonthEntry(6, 0, 6, Array.from(new Array(30), (val, index) => index + 1))).toEqual(MonthStartingOnASatWith30Days);
      expect(utils.calculateMonthEntry(0, 1, 5, Array.from(new Array(30), (val, index) => index + 1))).toEqual(MonthStartingOnASunWith30Days);
      expect(utils.calculateMonthEntry(3, 4, 5, Array.from(new Array(30), (val, index) => index + 1))).toEqual(MonthStartingOnAWedWith30Days);
    });

    test('creates valid 2D array of calendar months of 29 days starting and ending on given weekdays', () => {
      const MonthStartingOnASatWith29Days = [
        [ null, null, null, null, null, null, 1 ],
        [ 2, 3, 4, 5, 6, 7, 8 ],
        [ 9, 10, 11, 12, 13, 14, 15 ],
        [ 16, 17, 18, 19, 20, 21, 22 ],
        [ 23, 24, 25, 26, 27, 28, 29 ]
      ];
    
      const MonthStartingOnASunWith29Days = [
        [ 1, 2, 3, 4, 5, 6, 7 ],
        [ 8, 9, 10, 11, 12, 13, 14 ],
        [ 15, 16, 17, 18, 19, 20, 21 ],
        [ 22, 23, 24, 25, 26, 27, 28 ],
        [ 29, null, null, null, null, null, null ]
      ];
    
      const MonthStartingOnAWedWith29Days = [
        [ null, null, null, 1, 2, 3, 4 ],
        [ 5, 6, 7, 8, 9, 10, 11 ],
        [ 12, 13, 14, 15, 16, 17, 18 ],
        [ 19, 20, 21, 22, 23, 24, 25 ],
        [ 26, 27, 28, 29, null, null, null ]
      ];
  
      expect(utils.calculateMonthEntry(6, 6, 5, Array.from(new Array(29), (val, index) => index + 1))).toEqual(MonthStartingOnASatWith29Days);
      expect(utils.calculateMonthEntry(0, 0, 5, Array.from(new Array(29), (val, index) => index + 1))).toEqual(MonthStartingOnASunWith29Days);
      expect(utils.calculateMonthEntry(3, 3, 5, Array.from(new Array(29), (val, index) => index + 1))).toEqual(MonthStartingOnAWedWith29Days);
    });
    
    test('creates valid 2D array of calendar months of 28 days starting and ending on given weekdays', () => {
      const MonthStartingOnASatWith28Days = [
        [ null, null, null, null, null, null, 1 ],
        [ 2, 3, 4, 5, 6, 7, 8 ],
        [ 9, 10, 11, 12, 13, 14, 15 ],
        [ 16, 17, 18, 19, 20, 21, 22 ],
        [ 23, 24, 25, 26, 27, 28, null ]
      ];
    
      const MonthStartingOnASunWith28Days = [
        [ 1, 2, 3, 4, 5, 6, 7 ],
        [ 8, 9, 10, 11, 12, 13, 14 ],
        [ 15, 16, 17, 18, 19, 20, 21 ],
        [ 22, 23, 24, 25, 26, 27, 28 ]
      ];
    
      const MonthStartingOnAWedWith28Days = [
        [ null, null, null, 1, 2, 3, 4 ],
        [ 5, 6, 7, 8, 9, 10, 11 ],
        [ 12, 13, 14, 15, 16, 17, 18 ],
        [ 19, 20, 21, 22, 23, 24, 25 ],
        [ 26, 27, 28, null, null, null, null ]
      ];
  
      expect(utils.calculateMonthEntry(6, 5, 5, Array.from(new Array(28), (val, index) => index + 1))).toEqual(MonthStartingOnASatWith28Days);
      expect(utils.calculateMonthEntry(0, 6, 4, Array.from(new Array(28), (val, index) => index + 1))).toEqual(MonthStartingOnASunWith28Days);
      expect(utils.calculateMonthEntry(3, 2, 5, Array.from(new Array(28), (val, index) => index + 1))).toEqual(MonthStartingOnAWedWith28Days);
    });
  });

  describe('generates calendar given month and year', () => {
    test('returns null if given invalid inputs', () => {
      expect(utils.generateCalendarMonth(12, 2018)).toBeNull();
      expect(utils.generateCalendarMonth(-1, 2018)).toBeNull();
      expect(utils.generateCalendarMonth('december', 2018)).toBeNull();
      expect(utils.generateCalendarMonth('January', 2018)).toBeNull();
    });

    test('returns valid 2D array of calendar month from given month index and year', () => {
      const December2018 = [
        [ null, null, null, null, null, null, 1 ],
        [ 2, 3, 4, 5, 6, 7, 8 ],
        [ 9, 10, 11, 12, 13, 14, 15 ],
        [ 16, 17, 18, 19, 20, 21, 22 ],
        [ 23, 24, 25, 26, 27, 28, 29 ],
        [ 30, 31, null, null, null, null, null ] 
      ];

      const November2018 = [ 
        [ null, null, null, null, 1, 2, 3 ],
        [ 4, 5, 6, 7, 8, 9, 10 ],
        [ 11, 12, 13, 14, 15, 16, 17 ],
        [ 18, 19, 20, 21, 22, 23, 24 ],
        [ 25, 26, 27, 28, 29, 30, null ] 
      ];

      const October2018 = [ 
        [ null, 1, 2, 3, 4, 5, 6 ],
        [ 7, 8, 9, 10, 11, 12, 13 ],
        [ 14, 15, 16, 17, 18, 19, 20 ],
        [ 21, 22, 23, 24, 25, 26, 27 ],
        [ 28, 29, 30, 31, null, null, null ] 
      ];

      const September2018 = [ 
        [ null, null, null, null, null, null, 1 ],
        [ 2, 3, 4, 5, 6, 7, 8 ],
        [ 9, 10, 11, 12, 13, 14, 15 ],
        [ 16, 17, 18, 19, 20, 21, 22 ],
        [ 23, 24, 25, 26, 27, 28, 29 ],
        [ 30, null, null, null, null, null, null ] 
      ];

      const August2018 = [ 
        [ null, null, null, 1, 2, 3, 4 ],
        [ 5, 6, 7, 8, 9, 10, 11 ],
        [ 12, 13, 14, 15, 16, 17, 18 ],
        [ 19, 20, 21, 22, 23, 24, 25 ],
        [ 26, 27, 28, 29, 30, 31, null ] 
      ];

      const July2018 = [ 
        [ 1, 2, 3, 4, 5, 6, 7 ],
        [ 8, 9, 10, 11, 12, 13, 14 ],
        [ 15, 16, 17, 18, 19, 20, 21 ],
        [ 22, 23, 24, 25, 26, 27, 28 ],
        [ 29, 30, 31, null, null, null, null ] 
      ];

      const June2018 = [ 
        [ null, null, null, null, null, 1, 2 ],
        [ 3, 4, 5, 6, 7, 8, 9 ],
        [ 10, 11, 12, 13, 14, 15, 16 ],
        [ 17, 18, 19, 20, 21, 22, 23 ],
        [ 24, 25, 26, 27, 28, 29, 30 ] 
      ];

      const May2018 = [ 
        [ null, null, 1, 2, 3, 4, 5 ],
        [ 6, 7, 8, 9, 10, 11, 12 ],
        [ 13, 14, 15, 16, 17, 18, 19 ],
        [ 20, 21, 22, 23, 24, 25, 26 ],
        [ 27, 28, 29, 30, 31, null, null ] 
      ];

      const April2018 = [ 
        [ 1, 2, 3, 4, 5, 6, 7 ],
        [ 8, 9, 10, 11, 12, 13, 14 ],
        [ 15, 16, 17, 18, 19, 20, 21 ],
        [ 22, 23, 24, 25, 26, 27, 28 ],
        [ 29, 30, null, null, null, null, null ] 
      ];

      const March2018 = [
        [ null, null, null, null, 1, 2, 3 ],
        [ 4, 5, 6, 7, 8, 9, 10 ],
        [ 11, 12, 13, 14, 15, 16, 17 ],
        [ 18, 19, 20, 21, 22, 23, 24 ],
        [ 25, 26, 27, 28, 29, 30, 31 ] 
      ];

      const February2018 = [ 
        [ null, null, null, null, 1, 2, 3 ],
        [ 4, 5, 6, 7, 8, 9, 10 ],
        [ 11, 12, 13, 14, 15, 16, 17 ],
        [ 18, 19, 20, 21, 22, 23, 24 ],
        [ 25, 26, 27, 28, null, null, null ] 
      ];

      const January2018 = [ 
        [ null, 1, 2, 3, 4, 5, 6 ],
        [ 7, 8, 9, 10, 11, 12, 13 ],
        [ 14, 15, 16, 17, 18, 19, 20 ],
        [ 21, 22, 23, 24, 25, 26, 27 ],
        [ 28, 29, 30, 31, null, null, null ] 
      ];

      expect(utils.generateCalendarMonth(11, 2018)).toEqual(December2018);
      expect(utils.generateCalendarMonth(10, 2018)).toEqual(November2018);
      expect(utils.generateCalendarMonth(9, 2018)).toEqual(October2018);
      expect(utils.generateCalendarMonth(8, 2018)).toEqual(September2018);
      expect(utils.generateCalendarMonth(7, 2018)).toEqual(August2018);
      expect(utils.generateCalendarMonth(6, 2018)).toEqual(July2018);
      expect(utils.generateCalendarMonth(5, 2018)).toEqual(June2018);
      expect(utils.generateCalendarMonth(4, 2018)).toEqual(May2018);
      expect(utils.generateCalendarMonth(3, 2018)).toEqual(April2018);
      expect(utils.generateCalendarMonth(2, 2018)).toEqual(March2018);
      expect(utils.generateCalendarMonth(1, 2018)).toEqual(February2018);
      expect(utils.generateCalendarMonth(0, 2018)).toEqual(January2018);
    });

    test('returns valid 2D array of february month if leap year exists', () => {
      const leapYear2012 = [ 
        [ null, null, null, 1, 2, 3, 4 ],
        [ 5, 6, 7, 8, 9, 10, 11 ],
        [ 12, 13, 14, 15, 16, 17, 18 ],
        [ 19, 20, 21, 22, 23, 24, 25 ],
        [ 26, 27, 28, 29, null, null, null ] 
      ];

      const leapYear2016 = [ 
        [ null, 1, 2, 3, 4, 5, 6 ],
        [ 7, 8, 9, 10, 11, 12, 13 ],
        [ 14, 15, 16, 17, 18, 19, 20 ],
        [ 21, 22, 23, 24, 25, 26, 27 ],
        [ 28, 29, null, null, null, null, null ]
      ];

      const leapYear2020 = [
        [ null, null, null, null, null, null, 1 ],
        [ 2, 3, 4, 5, 6, 7, 8 ],
        [ 9, 10, 11, 12, 13, 14, 15 ],
        [ 16, 17, 18, 19, 20, 21, 22 ],
        [ 23, 24, 25, 26, 27, 28, 29 ]
      ];

      const leapYear2024 = [
        [ null, null, null, null, 1, 2, 3 ],
        [ 4, 5, 6, 7, 8, 9, 10 ],
        [ 11, 12, 13, 14, 15, 16, 17 ],
        [ 18, 19, 20, 21, 22, 23, 24 ],
        [ 25, 26, 27, 28, 29, null, null ]
      ];

      const leapYear2028 = [
        [ null, null, 1, 2, 3, 4, 5 ],
        [ 6, 7, 8, 9, 10, 11, 12 ],
        [ 13, 14, 15, 16, 17, 18, 19 ],
        [ 20, 21, 22, 23, 24, 25, 26 ],
        [ 27, 28, 29, null, null, null, null ]
      ];

      const leapYear2032 = [
        [ 1, 2, 3, 4, 5, 6, 7 ],
        [ 8, 9, 10, 11, 12, 13, 14 ],
        [ 15, 16, 17, 18, 19, 20, 21 ],
        [ 22, 23, 24, 25, 26, 27, 28 ],
        [ 29, null, null, null, null, null, null ]
      ];

      expect(utils.generateCalendarMonth(1, 2012)).toEqual(leapYear2012);
      expect(utils.generateCalendarMonth(1, 2016)).toEqual(leapYear2016);
      expect(utils.generateCalendarMonth(1, 2020)).toEqual(leapYear2020);
      expect(utils.generateCalendarMonth(1, 2024)).toEqual(leapYear2024);
      expect(utils.generateCalendarMonth(1, 2028)).toEqual(leapYear2028);
      expect(utils.generateCalendarMonth(1, 2032)).toEqual(leapYear2032);

    });
  });
  