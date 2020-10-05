// Exercise 2.4
// ------------
// not organized!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
console.log('exercise 2.4');
const header = document.querySelector("header");
const section = document.querySelector("section");
let rand = Math.floor(Math.random() * 8 + 1);

const sec = document.createElement('h1');
sec.innerText = `${rand}`;

let timeer;

const winner = document.createElement('div');
winner.className = 'win';
winner.innerText = `You WIN!!!`;



// start button
const start = document.createElement('div');
start.className = 'start';
start.innerText = `Start`;
header.appendChild(start);



start.onmousedown = function() {start.classList.toggle("start1")};


start.onmouseup = function() {
    start.classList.toggle("start2");
    header.appendChild(sec);
    document.querySelectorAll('button').forEach(function(button) {button.classList.toggle("letbegin"); button.classList.toggle("game");});
    timeer = setInterval(() => {timer();}, 1000);
};

function timer() {
    rand = rand - 1;
    sec.innerText = `${rand}`;
    if (random === winnerButtons) {
        clearInterval(timeer);
        const winner = document.createElement('h1');
        winner.className = 'win';
        winner.innerText = `You WIN!!!`;
        section.appendChild(winner);
    } else if (rand === 0) {
        clearInterval(timeer);
        const lose = document.createElement('h1');
        lose.className = 'lose';
        lose.innerText = `You Lose...`;
        section.appendChild(lose);
    }
}

function stopTimer() {
    clearInterval(timer);
}

// Game buttons
const random = Math.floor(Math.random() * 15 + 1);

for (i = 1; i <= random; i++) {
    const button = document.createElement('button');
    button.className = 'game';
    button.innerText = `${i}`;
    section.appendChild(button);
    button.style.backgroundColor = 'rgb(153, 0, 0)';
    let left = Math.floor(Math.random() * 95);
    let top = Math.floor(Math.random() * 90);
    button.style.left = `${left}%`;
    button.style.top = `${top}%`;
}


// Game buttons states changes
let winnerButtons = 0;
document.querySelectorAll('button').forEach(function(button) {
    button.addEventListener('click', function() {
        if (button.style.backgroundColor === 'rgb(153, 0, 0)') {
            button.style.backgroundColor = 'rgb(0, 89, 0)';
            winnerButtons += 1;
        } else {
            button.style.backgroundColor = 'rgb(153, 0, 0)';
            winnerButtons -= 1;
        }
    })
});