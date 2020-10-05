const letterCount = require("../exercise-1");

// Write 3 more expect functions to test the function you just wrote.
test("Exercise 1", () => {
  expect(letterCount(["crisp", "bacon"])).toBe(10);
  // add more tests here...
  expect(letterCount([])).toBe(0);
  expect(letterCount([1,2])).toBe(0);
  expect(letterCount(["crisp", "bacon", "tree", "a"])).toBe(15);
  expect(letterCount(["a"])).toBe(1);
});
