const letterCount = require("../exercise-1");

// Write 3 more expect functions to test the function you just wrote.
test("Exercise 1", () => {
  expect(letterCount(["crisp", "bacon"])).toBe(10);
  expect(letterCount(["foo", "bar"])).toBe(6);
  expect(letterCount(["", ""])).toBe(0);
  expect(letterCount([" ", " "])).toBe(2);
});
