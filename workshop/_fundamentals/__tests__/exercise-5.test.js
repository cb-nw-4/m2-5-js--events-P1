const getDaysInMonth = require("../exercise-5");

// Write 3 more expect functions to test the function you just wrote.
test("Exercise 5", () => {
  expect(getDaysInMonth("November")).toBe(30);
  expect(getDaysInMonth("January")).toBe(31);
  expect(getDaysInMonth("February")).toBe(28);
  expect(getDaysInMonth(1)).toBe(undefined);
  // add more tests here...
});
