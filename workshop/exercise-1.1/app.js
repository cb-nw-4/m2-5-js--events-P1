// Exercise 1.1
// ------------
console.log('exercise 1.1');

let body = document.querySelector("body");

let clickedFast = false;

function fastClick() {
    clickedFast = true;
}     

body.addEventListener('click', fastClick);

let loserTimeout = setTimeout(function() {
    if (clickedFast === true) {
        body.innerText = "You win!";
    } else {
        body.innerText = "You lose!";
    }
}, 1000);
