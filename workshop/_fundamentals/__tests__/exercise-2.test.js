const combineArrays = require("../exercise-2");

// Write 3 more expect functions to test the function you just wrote.
test("Exercise 2", () => {
  expect(
    combineArrays(["crisp", "bacon"], ["zuchini", "apple"])
  ).toStrictEqual(["apple", "bacon", "crisp", "zuchini"]);
  // add more tests here...
  expect(
    combineArrays(["red", "blue", "white"], ["green", "yellow"])
  ).toStrictEqual(["blue", "green", "red", "white", "yellow"]);

  expect(
    combineArrays("string","another")).toStrictEqual(undefined);
    expect(
      combineArrays([2,1],[true,0])).toStrictEqual(undefined);
});
