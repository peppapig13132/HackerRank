'use strict';

function weekdayText(weekdays) {
  // Implement your code here
  return function(index) {
    if(index < 0 || index > (weekdays.length - 1)) {
      throw new Error('Invalid weekday number');
    }

    return weekdays[index];
  }
}
