const letterCount = require("../exercise-1");

// Write 3 more expect functions to test the function you just wrote.
test("Exercise 1", () => {
  expect(letterCount(["crisp", "bacon"])).toBe(10);
  // add more tests here...
  expect(letterCount(["Billy","Bob"])).toBe(8);
  expect(letterCount(["1","2","3"])).toBe(3);
  expect(letterCount(["Hi","Bye", 1, true])).toBe(5);
});
