// Exercise 1.0
// ------------
console.log('exercise-1');
const body = document.querySelector('body');

function handleMouseClick () {
    document.querySelector('.main').innerText = ('You Win!');
}

body.addEventListener('click', handleMouseClick);
