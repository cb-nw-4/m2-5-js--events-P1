// Exercise 1.2
// ------------
console.log('exercise 1.2');
const body = document.querySelector("body");

let winner = true;
const time = Math.floor(Math.random() * 5 + 1);

const span = document.querySelector('span');
span.innerText = `${time}`;

setTimeout((time) => {
    winner = false;
    console.log(winner);
}, time*1000);

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