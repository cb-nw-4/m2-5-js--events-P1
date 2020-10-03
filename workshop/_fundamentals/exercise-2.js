// Exercise 2
//
// 1. Write a function accepts 2 arrays of strings and returns a new combined array of the strings in alphabetical order.
// e.g. combineArrays(["crisp", "bacon"], ['zuchini', 'apple']) returns ['apple', 'bacon', 'crispy', 'zuchini']

// - if any of the values in either array is not strings, return undefined.

const combineArrays = (arr1, arr2) => {

  // If arguments are not arrays
  if(!Array.isArray(arr1)||!Array.isArray(arr2)){
    return undefined;
  }

  let arr1IsString = arr1.every(element=>{
    return typeof element === "string";
});

let arr2IsString = arr2.every(element=>{
  return typeof element === "string";
});

if(arr1IsString && arr2IsString){
  let newArray = arr1.concat(arr2);
  newArray = newArray.sort();
   return newArray;
}

return undefined;

};

// 2. Do a console.log to verify your function.

// 3. Test your function.
// Look for the corresponding exercise file in the __tests__ folder.
// Add some test cases in the test. The first one is done for you.

module.exports = combineArrays;
