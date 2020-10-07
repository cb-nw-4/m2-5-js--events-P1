// Exercise 1.2
// ------------
console.log('exercise 1.2');

let body = document.querySelector('body'); 
let result = document.querySelector('.result');
let time = document.querySelector('#time');
let head = document.querySelector('head');
let fontFam = document.createElement('link');
let timeText=document.querySelector('.time-text');
fontFam.setAttribute('rel','stylesheet');
fontFam.setAttribute('href','href="https://fonts.googleapis.com/css2?family=Nunito:wght@600&family=Rubik:wght@600;800&display=swap');
head.appendChild(fontFam);
body.style.fontFamily="Nunito, sans-serif";

let clicked = false; 
let timer;
let randomTime = Math.round(Math.random()*5)*1000;

body.addEventListener("click", ()=>{
    clicked = true; 
    console.log('event',clicked);
    if(clicked) {
        result.innerText=('You Win!');
        body.appendChild(result); 
        clearTimeout(timer);
    }; 
});

timer = setTimeout (()=>{
    if(!clicked) { 
        result.innerText=('You Lose!');
        body.appendChild(result);
    };
} ,randomTime);

time.innerText=(randomTime/1000);
time.style.color="#ffee00";
body.style.fontSize= "1.5em";
body.style.color="white";
body.style.position="relative";
timeText.style.position="absolute";
timeText.style.top="5%";
timeText.style.left="1%";
timeText.style.fontWeight="bold";
result.style.color="#ff42f2";
result.style.fontWeight="bolder";
result.style.position="absolute";
result.style.top="40%";
result.style.left="30%";
result.style.fontSize="5em";

