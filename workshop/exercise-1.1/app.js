// Exercise 1.1
// ------------
console.log('exercise 1.1');
const body = document.querySelector("body");

let winner = true;

setTimeout(() => {
    winner = false;
    console.log(winner);
}, 1000);

body.addEventListener('click', winr);

const h2 = document.createElement('h2');

function winr() {
    if (winner === true) {
        h2.innerText = 'You win!';
        body.appendChild(h2);
    } else if (winner === false) {
        h2.innerText = 'You lose!';
        body.appendChild(h2);
    }
    body.removeEventListener('click', winr);
};