const getPairing = require("../exercise-3");

// Write 3 more expect functions to test the function you just wrote.
test("Exercise 3", () => {
  expect(getPairing("burger")).toBe("beer");
  // add more tests here...
});

test("Exercise 3", () => {
  expect(getPairing("fish")).toBe("white wine");
  // add more tests here...
});

test("Exercise 3", () => {
  expect(getPairing("beef")).toBe("red wine");
  // add more tests here...
});

test("Exercise 3", () => {
  expect(getPairing("strawberries")).toBe("champagne");
  // add more tests here...
});

test("Exercise 3", () => {
  expect(getPairing(1)).toBe("I didn't get that");
  // add more tests here...
});
