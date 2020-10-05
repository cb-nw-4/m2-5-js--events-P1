const combineArrays = require("../exercise-2");

// Write 3 more expect functions to test the function you just wrote.
test("Exercise 2", () => {
  expect(
    combineArrays(["crisp", "bacon"], ["zuchini", "apple"])
  ).toStrictEqual(["apple", "bacon", "crisp", "zuchini"]);
  // add more tests here...

  expect(
    combineArrays([1, "bacon"], ["zuchini", "apple"])
  ).toStrictEqual(undefined);

  expect(
    combineArrays([], ["zuchini", "apple"])
  ).toStrictEqual([ "apple", "zuchini"]);

  expect(
    combineArrays([], [])
  ).toStrictEqual([]);

  expect(
    combineArrays(["crisp", "bacon", "test"], ["zuchini", "apple"])
  ).toStrictEqual(["apple", "bacon", "crisp",  "test", "zuchini"]);
});
