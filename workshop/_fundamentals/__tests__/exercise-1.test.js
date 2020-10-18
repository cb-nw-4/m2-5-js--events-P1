const letterCount = require("../exercise-1");

// Write 3 more expect functions to test the function you just wrote.
test("Exercise 1", () => {
  expect(letterCount(["crisp", "bacon"])).toBe(10);
  // add more tests here...

  expect(letterCount(["bonjour", "hi"])).toBe(9);

  expect(letterCount(["cat", "dog", "bird"])).toBe(10);

  expect(letterCount(["JavaScript"])).toBe(10);
});
