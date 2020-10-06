const letterCount = require("../exercise-1");

// Write 3 more expect functions to test the function you just wrote.
test("Exercise 1", () => {
  expect(letterCount(["crisp", "bacon"])).toBe(10);
  // add more tests here...
  expect(letterCount(["crisp", "bacon", "hello"])).toBe(15);
  expect(letterCount(["crisp"])).toBe(5);
  expect(letterCount([" ", "bacon"])).toBe(6);
});
