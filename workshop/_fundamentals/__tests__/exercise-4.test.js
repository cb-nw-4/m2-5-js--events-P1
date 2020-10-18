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
        { pet: "fluffy", animal: "dog" },
        { pet: "whiskers", aniaml: "cat" },
        { pet: "hopper", animal: "rabbit" },
      ],
      "pet"
    )
  ).toStrictEqual(["fluffy", "whiskers", "hopper"]);

  expect(
    getValues(
      [
        { person: "ann", age: 19 },
        { person: "bob", age: 22 },
        { person: "sue", age: 23 },
        { person: "dee", age: 18 },
      ],
      "age"
    )
  ).toStrictEqual([19, 22, 23, 18]);

  expect(
    getValues(
      [
        { city: "Los Angeles", state: "California" },
        { city: "Spokane", country: "USA" },
        { city: "Eugene", state: "Oregon" },
      ],
      "country"
    )
  ).toStrictEqual(["null", "USA", "null"]);
  
});
