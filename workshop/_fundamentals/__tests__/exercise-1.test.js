const letterCount = require("../exercise-1");

// Write 3 more expect functions to test the function you just wrote.
test("Exercise 1", () => {
  expect(letterCount(["crisp", "bacon"])).toBe(10);
  // add more tests here...
  expect(letterCount(["tree", "flower","water","sun"])).toBe(18);
  expect(letterCount(["amigos"])).toBe(6);
  expect(letterCount(["This is a sentence."])).toBe(19);
  expect(letterCount()).toBe(undefined);
});
