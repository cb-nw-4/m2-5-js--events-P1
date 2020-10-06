const letterCount = require("../exercise-1");

// Write 3 more expect functions to test the function you just wrote.
test("Exercise 1", () => {
  expect(letterCount(["crisp", "bacon"])).toBe(10);
  // add more tests here...
  expect(letterCount([9, "bacon"])).toBe(5);
  expect(letterCount(["January", "February", "March"])).toBe(20);
  expect(letterCount([false, "true"])).toBe(4);
});
