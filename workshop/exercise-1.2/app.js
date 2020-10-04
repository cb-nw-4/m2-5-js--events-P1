// Exercise 1.2
const container = document.querySelector('body');
container.style.background = 'radial-gradient(#0e0491, #02a9db)';
const timeText = document.querySelector('.time-text');
const timeRemaining = document.querySelector('#time');

// //styling of counting text
timeText.style.color = 'white';
timeText.style.fontSize = '70px';
timeText.style.fontFamily = 'Patrick Hand';
timeText.style.padding = '50px';
container.style.position = 'relative';
timeText.style.position = 'absolute';
timeText.style.top = '0';
timeRemaining.style.color = 'yellow';


// To display "Win"/"Lose" text
let count = 0;
let random = Math.floor(Math.random() * 5) + 1;

window.addEventListener('load', notClickedFast);
const result = document.querySelector('.result');
function notClickedFast() {
    timeRemaining.innerText = random;
    const countDown = setInterval(() => {
        random = random - 1;
        timeRemaining.innerText = random;
        if (random <= 0) {
        clearInterval(countDown);
        }
    }, 1000); 
    setTimeout(() => {
        count = 1;
    }, (random * 1000));
};

window.addEventListener('click', clickedFast);
function clickedFast() {
    if (count < 1) {
        result.innerText = 'You Win!';
    }
    else {
        result.innerText = 'You Lose!';
    }
}

 //styling of result text
result.style.color = '#ff00ff'; 
result.style.fontSize = '250px'; 
result.style.fontFamily = 'Patrick Hand';
result.style.width = '100%';
result.style.position = 'absolute';
result.style.display = 'flex';
result.style.justifyContent = 'center';

// console.log('exercise 1.2');
