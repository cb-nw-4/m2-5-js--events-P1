// Exercise 1.0 COMPLETE
// ------------
let body = document.querySelector("body");
let main = document.querySelector(".main");
let youWin = document.createElement("p");
main.appendChild(youWin);
console.log(youWin);

body.addEventListener("click", function() {
    youWin.innerText = "You Win!";
});

console.log('exercise-1');
