// Exercise 5
//
// 1. Write a function that accepts a month (as a string) as an argument and returns the number of days in that month.
// Use a switch statement to solve this exercise.

// - Ignore leap years
// - If the provided argument is not a known month, return 'error';

const getDaysInMonth = (month) => {
  let numDays;
  switch (month) {
    case 'January':
    case 'March':
    case 'May':
    case 'July':
    case 'August':
    case 'October':
    case 'December':
      numDays = 31;
      break;

    case 'February':
      numDays = 28;
      break;
    
    case 'April':
    case 'June':
    case 'September':
    case 'November':
      numDays = 30;
      break;
    
    default: 
      return "error";
  }
  return numDays;
};

// 2. Do a console.log to verify your function.
console.log(getDaysInMonth('January'));

// 3. Test your function.
// Look for the corresponding exercise file in the __tests__ folder.
// Add some test cases in the test. The first one is done for you.

module.exports = getDaysInMonth;
