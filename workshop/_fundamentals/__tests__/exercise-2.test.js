const combineArrays = require("../exercise-2");

// Write 3 more expect functions to test the function you just wrote.
test("Exercise 2", () => {
  expect(
    combineArrays(["crisp", "bacon"], ["zuchini", "apple"])
  ).toStrictEqual(["apple", "bacon", "crisp", "zuchini"]);
  // add more tests here...
  expect(
    combineArrays(["a", "b", "t"], ["z", "f"])
  ).toStrictEqual(["a", "b", "f", "t", "z"]);
  expect(
    combineArrays(["Dec", "Jan"], [true, "March"])
  ).toStrictEqual(undefined); 
  expect(
    combineArrays([1, 2, 3], [4, 5, 6])
  ).toStrictEqual(undefined);
});
