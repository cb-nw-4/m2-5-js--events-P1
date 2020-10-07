// Exercise 1.1
// ------------
console.log('exercise 1.1');

let clicked = false; 
let body = document.querySelector('body'); 
let result = document.querySelector('.result');
let text =document.createElement('p'); 
let head = document.querySelector('head');
let fontFam = document.createElement('link');
fontFam.setAttribute('rel','stylesheet');
fontFam.setAttribute('href','href="https://fonts.googleapis.com/css2?family=Nunito:wght@600&family=Rubik:wght@600;800&display=swap');

body.addEventListener("click", ()=>{
    clicked = true; 
    console.log('event',clicked);
});

setTimeout (()=>{
    if(clicked){
        result.innerText=('You Win!');
        body.appendChild(result);
    } else{
        result.innerText=('You Lose!');
        body.appendChild(result);
    }
},1000);

head.appendChild(fontFam);
body.style.fontFamily="Nunito, sans-serif";

result.style.color="#ff42f2";
result.style.fontSize="8em";
body.style.position = "relative";
result.style.position = "absolute"; 
result.style.top="40%";
result.style.left="30%";
result.style.fontWeight="bold";

body.appendChild(text);
text.innerText=("Be a quicker clicker!")
text.style.fontSize="2em";
text.style.position="absolute";
text.style.top="1%"; 
text.style.left="1%";
text.style.fontWeight="bold";
text.style.color="white";




