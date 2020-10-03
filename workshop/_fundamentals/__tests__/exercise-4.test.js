const getValues = require("../exercise-4");

// Write 3 more expect functions to test the function you just wrote.
test("Exercise 4", () => {
  expect(
    getValues(
      [
        { name: "chris", age: 23 },
        { name: "liv", age: 36 },
        { name: "dave", age: 43 },
      ],
      "name"
    )
  ).toStrictEqual(["chris", "liv", "dave"]);
  // add more tests here...
  expect(
    getValues(
      [
        { name: "chris", age: 23 },
        { name: "liv", age: 36 },
        { name: "dave", age: 43 },
      ],
      "occupation"
    )
  ).toStrictEqual(null);
  expect(
    getValues(
      [
        { name: "chris", age: 23, occupation: "developer"},
        { name: "liv", age: 36, occupation: "teacher"},
        { name: "dave", age: 43, occupation: "doctor"},
      ],
      "occupation"
    )
  ).toStrictEqual(["developer", "teacher", "doctor"]);
  expect(
    getValues(
      [
        { name: "chris", age: 23, occupation: "developer"},
        { name: "liv", age: 36, occupation: "teacher"},
        { name: "dave", age: 43 },
      ],
      "occupation"
    )
  ).toStrictEqual(["developer", "teacher", undefined]);
});
