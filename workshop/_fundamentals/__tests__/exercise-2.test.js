const combineArrays = require("../exercise-2");

// Write 3 more expect functions to test the function you just wrote.
test("Exercise 2", () => {
  expect(
    combineArrays(["crisp", "bacon"], ["zuchini", "apple"])
  ).toStrictEqual(["apple", "bacon", "crisp", "zuchini"]);
  // add more tests here...
  expect(
    combineArrays([123, "bacon"], ["zuchini", "apple"])
  ).toStrictEqual(undefined);
  expect(
    combineArrays(["crisp", "aaab"], ["zuchini", "apple"])
  ).toStrictEqual(["aaab", "apple", "crisp", "zuchini"]);
});
