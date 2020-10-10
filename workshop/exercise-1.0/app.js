// Exercise 1.0
// ------------
function printText() {
    // console.log('You win!');
    body.innerText = 'You win!';
}
let body = document.querySelector('body');
body.addEventListener('click', printText);
console.log('exercise-1');

