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
  expect(
    getValues(
      [
        { name: "chris", age: 23 },
        { name: "liv", age: 36 },
        { name: "dave", age: 43 },
      ],
      "age"
    )
  ).toStrictEqual([23, 36, 43]);
  expect(
    getValues(
      [
        { name: "doug", age: 53 },
        { name: "bob", age: 10 },
        { name: "john", age: 25 },
      ],
      "name"
    )
  ).toStrictEqual(["doug", "bob", "john"]);
  expect(
    getValues(
      [
        { name: "doug", age: 53 },
        { name: "bob", age: 10 },
        { name: "john", age: 25 },
      ],
      "age"
    )
  ).toStrictEqual([53, 10, 25]);
});
