// Exercise 1.0
// ------------
console.log('exercise-1');

let mainContainer = document.getElementById('main');

document.body.addEventListener("click", displayText);


function displayText() {

    mainContainer.innerHTML = "You Win!"


}