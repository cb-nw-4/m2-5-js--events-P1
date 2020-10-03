const combineArrays = require("../exercise-2");

// Write 3 more expect functions to test the function you just wrote.
test("Exercise 2", () => {
  expect(
    combineArrays(["crisp", "bacon"], ["zuchini", "apple"])
  ).toStrictEqual(["apple", "bacon", "crisp", "zuchini"]);
  // add more tests here...
  expect(
    combineArrays(["January", "February"], ["March", "April", "May", "June"])
  ).toStrictEqual(["April", "February", "January", "June", "March", "May" ]);
  expect(
    combineArrays([false, "February"], ["March", "April", "May", "June"])
  ).toStrictEqual(["April", "February", "June", "March", "May", false ]);
  expect(
    combineArrays([9, "February"], ["March", "April", "May", "June"])
  ).toStrictEqual([9, "April", "February", "June", "March", "May"]);
});
