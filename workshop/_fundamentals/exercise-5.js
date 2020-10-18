// Exercise 5
//
// 1. Write a function that accepts a month (as a string) as an argument and returns the number of days in that month.
// Use a switch statement to solve this exercise.

// - Ignore leap years
// - If the provided argument is not a known month, return 'error';

const getDaysInMonth = (month) => {
  switch (month) {
    case "January":
    case "March":
    case "May":
    case "July":
    case "August":
    case "October":
    case "December":
      console.log(31);
      return 31;
      break;
    case "April":
    case "June":
    case "September":
    case "November":
      console.log(30);
      return 30;
      break;
    case "February":
      console.log(28)
      return 28;
      break;
  }
  if (month !== "January" || month !== "February" || month !== "March" || month !== "April" || month !== "May" || month !== "June" || month !== "July" || month !== "August" || month !== "September" || month !== "October" || month !== "November" || month !== "December") {
    console.log("error");
    return "error";
  }
};

// 2. Do a console.log to verify your function.

// 3. Test your function.
// Look for the corresponding exercise file in the __tests__ folder.
// Add some test cases in the test. The first one is done for you.

module.exports = getDaysInMonth;
