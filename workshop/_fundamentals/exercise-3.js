// Exercise 3
//
// 1. Write a function accepts a food item as an argument and returns the proper beverage pairing.
// e.g. getPairing('burger') returns 'beer'.

// - if the provided argument is not a string, return "I didn't get that!".

let foodPairings = {
  burger: "beer",
  fish: "white wine",
  beef: "red wine",
  strawberries: "champagne",
};

const getPairing = (key) => {
  // Insert missing solution please
  
  switch(key){
    case "burger":
      console.log("beer");
      break;
    
    case "fish":
      console.log("white wine");
      break;
    
    case "beef":
      console.log("red wine");
      break;

    case "strawberries":
      console.log("champagne");
      break;

    default:
      console.log("Serve me proper food!");
      break;
  }
};

// 2. Do a console.log to verify your function.

// 3. Test your function.
// Look for the corresponding exercise file in the __tests__ folder.
// Add some test cases in the test. The first one is done for you.

module.exports = getPairing;
