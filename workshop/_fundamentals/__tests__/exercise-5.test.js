const getDaysInMonth = require("../exercise-5");

// Write 3 more expect functions to test the function you just wrote.
test("Exercise 5", () => {
  expect(getDaysInMonth("November")).toBe(30);
  // add more tests here...
  expect(getDaysInMonth("Monday")).toBe("error");
  expect(getDaysInMonth("May")).toBe(31);
  expect(getDaysInMonth("February")).toBe(29);
});
