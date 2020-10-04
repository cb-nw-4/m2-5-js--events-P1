const letterCount = require("../exercise-1");

// Write 3 more expect functions to test the function you just wrote.
test("Exercise 1", () => {
  expect(letterCount(["crisp", "bacon"])).toBe(10);
  // add more tests here...
  expect(letterCount(['Fire', 'Air', 'Water'])).toBe(12);
  expect(letterCount(['Wind', 'Water', 'Fire'])).toBe(13);
  expect(letterCount([1, 2, 'a', '1a'])).toBe(5);
});
