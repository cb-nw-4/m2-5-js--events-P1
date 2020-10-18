// Exercise 1.0
// ------------
console.log('exercise-1');

let body = document.querySelector("body");
body.addEventListener('click', function(onClick) {
    console.log("Here's some text!");
    body.innerText = "Here's some text!";
});