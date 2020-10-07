// Exercise 1
//
// 1. Write a function that returns the sum of the letter count of each string in the array
// e.g. letterCount(["crisp", "bacon"]) returns 10

const letterCount = (arr) => {
  // Insert missing solution please
  let total = arr.map(el => {
    return el.length
  })
  
  let reduced = total.reduce((accum, curr) => {
    return accum + curr
  }, 0)

  return reduced
};


letterCount(['crisp','bacon'])

// 2. Do a console.log to verify your function.

console.log(reduced)

// 3. Test your function.
// Look for the corresponding exercise file in the __tests__ folder.
// Add some test cases in the test. The first one is done for you.

module.exports = letterCount;
