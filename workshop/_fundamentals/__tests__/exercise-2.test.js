const combineArrays = require("../exercise-2");

// Write 3 more expect functions to test the function you just wrote.
test("Exercise 2", () => {
  expect(
    combineArrays(["crisp", "bacon"], ["zuchini", "apple"])
  ).toStrictEqual(["apple", "bacon", "crisp", "zuchini"]);
  // add more tests here...

  expect(
    combineArrays(["Ann", "Joe"], ["Sue", "Bob"])
  ).toStrictEqual(["Ann", "Bob", "Joe", "Sue"]);

  expect(
    combineArrays(["dog", "cat", "bird"], ["fish", "bunny"])
  ).toStrictEqual(["bird", "bunny", "cat", "dog", "fish"]);

  expect(
    combineArrays(["sandwich"], ["ice cream", "pasta"])
  ).toStrictEqual(["ice cream", "pasta", "sandwich"]);
});
