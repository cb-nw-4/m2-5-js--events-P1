// Exercise 1.0
// ------------
console.log('exercise-1');
const body = document.querySelector("body");

body.addEventListener('click', function() {
    const h1 = document.createElement('h1');
    h1.innerText = 'You win!';
    body.appendChild(h1);
});