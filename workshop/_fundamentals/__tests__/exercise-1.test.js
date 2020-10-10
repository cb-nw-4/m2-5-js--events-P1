const letterCount = require("../exercise-1");

// Write 3 more expect functions to test the function you just wrote.
test("Exercise 1", () => {
  expect(letterCount(["crisp", "bacon"])).toBe(10);
  // add more tests here...
  expect(letterCount(["watermelon", "mango"])).toBe(15);
  expect(letterCount(["table", "wood"])).toBe(9);
  expect(letterCount(["juice", "sandwich"])).toBe(13);
});
