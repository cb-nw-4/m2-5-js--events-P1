// Exercise 1.1
// ------------
console.log('exercise 1.1');

let resultContainer = document.getElementById('result');



resultContainer.innerHTML = "Be a quicker clicker!";

para = document.createElement('P');
resultContainer.appendChild(para);

let flag = false;



function displayText() {
    if (!flag) {
        para.innerHTML = "You win";
        flag = true;
    }
}

document.body.addEventListener("click", displayText);


setTimeout(function() {
    if (!flag) {
        para.innerHTML = "you loose";
        flag = true;
    }

}, 3000)