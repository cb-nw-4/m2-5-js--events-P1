const combineArrays = require("../exercise-2");

// Write 3 more expect functions to test the function you just wrote.
test("Exercise 2", () => {
  expect(
    combineArrays(["crisp", "bacon"], ["zuchini", "apple"])
  ).toStrictEqual(["apple", "bacon", "crisp", "zuchini"]);
  // add more tests here...
  //1
  expect(
    combineArrays(["pizza","pasta","pepperoni"],["pepper","paprika","pie"])
  ).toStrictEqual(["paprika", "pasta", "pepper", "pepperoni", "pie", "pizza"]);
  //2
  expect(
    combineArrays(["Albvs", "Warner", "Septimus"],["Bartemius","Peregrine"])
  ).toStrictEqual(["Albvs", "Bartemius", "Peregrine", "Septimus", "Warner"]);

  //3
  expect(
    combineArrays(["Clock","Keys","Gods"],["Furnunculous","Pandemonium"])
  ).toStrictEqual(["Clock", "Furnunculous", "Gods", "Keys", "Pandemonium"]);
});
