// Exercise 1.2
// ------------
console.log('exercise 1.2');

let isClicked = false;
document.querySelector("body").addEventListener("click", function(event) {
    isClicked = true;    
});

const randomDelay = Math.floor(Math.random() * 4) + 1;
let time = document.querySelector("#time");
time.innerText = randomDelay;

setTimeout(function(){       
    let main = document.querySelector(".result");
    isClicked ? main.innerText = "You Win!" : main.innerText = "You Lose!";
}, randomDelay * 1000);