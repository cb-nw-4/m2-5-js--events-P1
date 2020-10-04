// Exercise 1.1
const container = document.querySelector('body');
container.style.background = 'radial-gradient(#0e0491, #02a9db)';
const beQuickerText = document.createElement('p');
beQuickerText.innerText = 'Be a quicker clicker!';
container.appendChild(beQuickerText);

//styling of beQuickerText
beQuickerText.style.color = 'white';
beQuickerText.style.fontSize = '50px';
beQuickerText.style.fontFamily = 'Patrick Hand';
beQuickerText.style.padding = '50px';
container.style.position = 'relative';
beQuickerText.style.position = 'absolute';
beQuickerText.style.top = '0';

//To display "Win"/"Lose" text
let count = 0;
window.addEventListener('load', notClickedFast);
const result = document.querySelector('.result');
function notClickedFast() {
    setTimeout(() => {
        count = 1;
    }, 1000);
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
result.style.margin = '150px auto';
result.style.textAlign = 'center';
result.style.position = 'absolute';
result.style.top = '150px';
result.style.left = '250px';


// console.log('exercise 1.1');
