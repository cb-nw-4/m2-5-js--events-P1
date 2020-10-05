// Exercise 1.1
// ------------
console.log('exercise 1.1');

let timeOut = false;
const body = document.querySelector('body');

function handleMouseClick() {
    clearInterval(timer);
    if (timeOut) {
        document.querySelector('.result').innerText = 'You Lose!';
    } else {
        document.querySelector('.result').innerText = 'You Win!';
    }
}

body.addEventListener('click', handleMouseClick);

const timer = setInterval(function() {
    timeOut = true;
}, 1000);