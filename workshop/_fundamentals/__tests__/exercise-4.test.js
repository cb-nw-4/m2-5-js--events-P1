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
});

test("Exercise 4", () => {
  expect(
    getValues(
      [
        { name: "chris", age: 23 },
        { name: "liv", age: 36 },
        { name: "dave", age: 43 },
      ],
      "lname"
    )
  ).toStrictEqual([null, null, null]);
  // add more tests here...
});

test("Exercise 4", () => {
  expect(
    getValues(
      [
        { name: "chris", age: 23},
        { name: "liv", age: 36, city: "Ottawa" },
        { name: "dave", age: 43, city: "Montreal" },
      ],
      "city"
    )
  ).toStrictEqual([null, "Ottawa", "Montreal"]);
  // add more tests here...
});

