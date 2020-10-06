const combineArrays = require("../exercise-2");

// Write 3 more expect functions to test the function you just wrote.
test("Exercise 2", () => {
  expect(
    combineArrays(["crisp", "bacon"], ["zuchini", "apple"])
  ).toStrictEqual(["apple", "bacon", "crisp", "zuchini"]);
  expect(
    combineArrays(["one", "two"], ["three", "four"])
  ).toStrictEqual(["four", "one", "three", "two"]);
  expect(
    combineArrays(["35", "19"], ["2", "101"])
  ).toStrictEqual(["101", "19", "2", "35"]);
  expect(
    combineArrays(["d", "b"], ["a", "c"])
  ).toStrictEqual(["a", "b", "c", "d"]);
});
