// Exercise 1.2
// ------------
console.log('exercise 1.2');

let body = document.querySelector("body");

let clickedFast = false;

function fastClick() {
    clickedFast = true;
}

body.addEventListener('click', fastClick);

function randomNumber(min, max) {
    return (Math.floor(Math.random() * (max - min)) + min);
};

let counter = randomNumber(1000, 5000);
let secondsCounter = (counter / 1000);
let secondsCounterInteger = Math.round(secondsCounter);

time = document.querySelector('#time');
time.innerText = `${secondsCounterInteger}`

let loserTimeout = setTimeout(function() {
    if (clickedFast === true) {
        body.innerText = "You've won!";
    } else {
        body.innerText = "You lose!";
    }
}, counter);

