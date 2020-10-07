// Exercise 1.0
// ------------
console.log('exercise-1');

let body = document.querySelector("body"); 

let clickedText = document.createElement('p');
clickedText.innerText = ('You win!'); 

body.addEventListener("click", ()=> {
    console.log("You win!");
    body.appendChild(clickedText);
}); 