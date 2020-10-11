// Exercise 1.2
// ------------
console.log('exercise 1.2');

const container = document.querySelector('body');
container.style.background = 'radial-gradient(#0e0491, #02a9db)';
const timeText = document.querySelector('.time-text');
const timeCount = document.querySelector('#time');

//counting span

timeText.style.color = 'white';
timeText.style.fontFamily = 'Roboto';
timeText.style.fontSize = '50px';
timeText.style.padding = '50px';
timeText.style.top = '0';
container.style.position = 'relative';
timeText.style.position = 'absolute';

timeCount.style.color = 'yellow';

let count = 0;
let random = Math.floor(Math.random() * 5) + 1;

//countdown

window.addEventListener('load', notClickFast);
const result = document.querySelector('.result');
function notClickFast() {
    timeCount.innerText = random;
    const countDown = setInterval(() => {
        random = random - 1;
        timeCount.innerText = random;
        if (random <= 0) {
        clearInterval(countDown);
        }
    }, 1000); 
    setTimeout(() => {
        count = 1;
    }, (random * 1000));
};

//result

window.addEventListener('click', clickFast);
function clickFast() {
    if (count < 1) {
        result.innerText = 'You Win!';
    }
    else {
        result.innerText = 'You Lose!';
    }
}

 //win lose result

result.style.display = 'flex';
result.style.justifyContent = 'center';
result.style.position = 'absolute';
result.style.width = '100%';
result.style.fontFamily = 'Roboto';
result.style.color = '#ff00ff'; 
result.style.fontSize = '300px'; 



