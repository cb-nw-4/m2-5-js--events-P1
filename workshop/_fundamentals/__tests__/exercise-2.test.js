const combineArrays = require("../exercise-2");

// Write 3 more expect functions to test the function you just wrote.
test("Exercise 2", () => {
  expect(
    combineArrays(["crisp", "bacon"], ["zuchini", "apple"])
  ).toStrictEqual(["apple", "bacon", "crisp", "zuchini"]);
  // add more tests here...
  expect(
    combineArrays(["crisp"], ["zuchini", "apple"])
  ).toStrictEqual(["apple", "crisp", "zuchini"]);

  expect(
    combineArrays(["crisp"], ["zuchini"])
  ).toStrictEqual(["crisp", "zuchini"]);

  expect(
    combineArrays(["crisp", 1], ["zuchini", 3])
  ).toStrictEqual(undefined);
});
