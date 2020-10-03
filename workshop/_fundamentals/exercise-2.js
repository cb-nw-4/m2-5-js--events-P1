// Exercise 2
//
// 1. Write a function accepts 2 arrays of strings and returns a new combined array of the strings in alphabetical order.
// e.g. combineArrays(["crisp", "bacon"], ['zuchini', 'apple']) returns ['apple', 'bacon', 'crispy', 'zuchini']

// - if any of the values in either array is not strings, return undefined.

const combineArrays = (arr1, arr2) => {
  let arr3 = arr1.concat(arr2);
  let strAlphabetical;
  for (let i = 0; i < arr3.length; i++) {
    if (typeof arr3[i] === "string") {
      strAlphabetical = arr3.sort();
    }
  }
  return (strAlphabetical);
};

// 2. Do a console.log to verify your function.
console.log(combineArrays(["crisp", "bacon"], ['zuchini', 'apple']));

// 3. Test your function.
// Look for the corresponding exercise file in the __tests__ folder.
// Add some test cases in the test. The first one is done for you.

module.exports = combineArrays;
