// Exercise 1.2
// ------------
console.log('exercise 1.2');

let timeRemaining = Math.floor((Math.random() * 5) + 1);
const body = document.querySelector('body');
const h1 = document.querySelector('h1');
h1.innerHTML = 'You have <span style="color:yellow;">' + timeRemaining + '</span> seconds to click';

function handleMouseClick() {
    clearInterval(timer);
    document.querySelector('.result').innerText = 'You Win!';
}

body.addEventListener('click', handleMouseClick);

const timer = setInterval(function() {
    timeRemaining--;
    h1.innerHTML = 'You have <span style="color:yellow;">' + timeRemaining + '</span> seconds to click';
    if (timeRemaining === 0) {
        clearInterval(timer);
        document.querySelector('.result').innerText = 'You Lose!';
        body.removeEventListener('click', handleMouseClick);
    }
}, 1000);