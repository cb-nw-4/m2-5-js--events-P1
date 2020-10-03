const combineArrays = require("../exercise-2");

// Write 3 more expect functions to test the function you just wrote.
test("Exercise 2", () => {
  expect(
    combineArrays(["crisp", "bacon"], ["zuchini", "apple"])
  ).toStrictEqual(["apple", "bacon", "crisp", "zuchini"]);
  // add more tests here...
});

test("Exercise 2", () => {
  expect(
    combineArrays(["crisp", 1], ["zuchini", "apple"])
  ).toStrictEqual(undefined);
  // add more tests here...
});

test("Exercise 2", () => {
  expect(
    combineArrays(["crisp", "bacon", "apples"], ["zuchini", "apple", "watermelon"])
  ).toStrictEqual(["apple", "apples", "bacon", "crisp", "watermelon", "zuchini"]);
  // add more tests here...
});
