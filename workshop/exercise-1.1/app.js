// Exercise 1.1
// ------------
console.log('exercise 1.1');

let newText=document.createElement('p');
newText.innerText="Start the clicking!";
newText.style.fontFamily='Comic Neue, cursive';
newText.style.fontSize="40px";
newText.style.color="white";
document.body.appendChild(newText);
document.body.style.backgroundImage='radial-gradient(purple,blue)';

let resulttext=document.querySelector("#result");
document.body.addEventListener('click', displayText);
resulttext.style.position="absolute";
resulttext.style.color="pink";
resulttext.style.fontFamily='Comic Neue, cursive';
resulttext.style.fontSize="200px";
resulttext.style.left="20%";
resulttext.style.top="20%";

let event1=setTimeout(function(){
    resulttext.innerText="You lose!";
    document.body.removeEventListener('click',displayText);
}, 3000);

function displayText(){
    resulttext.innerText="You win!";

    clearTimeout(event1);
    document.body.removeEventListener('click',displayText);
}