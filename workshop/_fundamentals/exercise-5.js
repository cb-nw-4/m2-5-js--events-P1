// Exercise 5
//
// 1. Write a function that accepts a month (as a string) as an argument and returns the number of days in that month.
// Use a switch statement to solve this exercise.

// - Ignore leap years
// - If the provided argument is not a known month, return 'error';

const getDaysInMonth = (b) => {
  // Insert missing solution please
  if(b == "January"){
    return 30
  }else if (b == "February"){
    return 22
  }else if (b == "March"){
    return 31
  }else if (b == "April"){
    return 30
  }else if (b == "May"){
    return 31
  }else if (b == "June"){
    return 30
  }else if (b == "July"){
    return 31
  }else if (b == "Auguest"){
    return 31
  }else if (b == "September"){
    return 30
  }else if (b == "October"){
    return 31
  }else if (b == "November"){
    return 30
  }else if (b == "December"){
    return 31
  }else{
    return error
  }

};

// 2. Do a console.log to verify your function.

// 3. Test your function.
// Look for the corresponding exercise file in the __tests__ folder.
// Add some test cases in the test. The first one is done for you.

module.exports = getDaysInMonth;
