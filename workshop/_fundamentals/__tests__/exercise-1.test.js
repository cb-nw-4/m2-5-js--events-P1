const letterCount = require("../exercise-1");

// Write 3 more expect functions to test the function you just wrote.
test("Exercise 1", () => {
  expect(letterCount(["crisp", "bacon"])).toBe(10);
  // add more tests here...
});

test("Exercise 1", () => {
  expect(letterCount(["crispy", "bacons"])).toBe(12);
  // add more tests here...
});

test("Exercise 1", () => {
  expect(letterCount(["crispiest", "bacon"])).toBe(14);
  // add more tests here...
});