// Exercise 5
//
// 1. Write a function that accepts a month (as a string) as an argument and returns the number of days in that month.
// Use a switch statement to solve this exercise.

// - Ignore leap years
// - If the provided argument is not a known month, return 'error';

const getDaysInMonth = (month) => {
  switch(month) {
    case "January":
      return new Date(2020, 1, 0).getDate();    
    case "February":
      return new Date(2020, 2, 0).getDate();
    case "Mars":
      return new Date(2020, 3, 0).getDate();
    case "April":
      return new Date(2020, 4, 0).getDate();
    case "May":
      return new Date(2020, 5, 0).getDate();
    case "June":
      return new Date(2020, 6, 0).getDate();
    case "July":
      return new Date(2020, 7, 0).getDate();
    case "August":
      return new Date(2020, 8, 0).getDate();
    case "September":
      return new Date(2020, 9, 0).getDate();
    case "October":
      return new Date(2020, 10, 0).getDate();
    case "November":
      return new Date(2020, 11, 0).getDate();  
    case "December":
      return new Date(2020, 12, 0).getDate();
    default:
      return "error";
   }
};

// 2. Do a console.log to verify your function.

// 3. Test your function.
// Look for the corresponding exercise file in the __tests__ folder.
// Add some test cases in the test. The first one is done for you.

module.exports = getDaysInMonth;
