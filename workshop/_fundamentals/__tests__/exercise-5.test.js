const getDaysInMonth = require("../exercise-5");

// Write 3 more expect functions to test the function you just wrote.
test("Exercise 5", () => {
  expect(getDaysInMonth("November")).toBe(30);
  // add more tests here...
});

test("Exercise 5", () => {
  expect(getDaysInMonth("January")).toBe(31);
  // add more tests here...
});

test("Exercise 5", () => {
  expect(getDaysInMonth("February")).toBe(29);
  // add more tests here...
});

test("Exercise 5", () => {
  expect(getDaysInMonth("April")).toBe(30);
  // add more tests here...
});

test("Exercise 5", () => {
  expect(getDaysInMonth("Jan")).toBe("error");
  // add more tests here...
});