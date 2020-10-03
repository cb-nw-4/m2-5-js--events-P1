// Exercise 1.1
// ------------
console.log('exercise 1.1');

let newText=document.createElement('p');
newText.innerText="Start the clicking!";
document.body.appendChild(newText);
//document.body.style.backgroundImage='radial-gradient(purple,blue)';

let resulttext=document.querySelector("#result");
document.body.addEventListener('click', displayText);

let event1=setTimeout(function(){
    resulttext.innerText="You lose!";
    document.body.removeEventListener('click',displayText);
}, 3000);

function displayText(){
    resulttext.innerText="You win!";
    clearTimeout(event1);
    document.body.removeEventListener('click',displayText);
}

