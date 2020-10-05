// Exercise 1.2
// ------------
console.log('exercise 1.2');




let resultContainer = document.getElementById('result');
resultContainer.style.color = '#FF00FF';
resultContainer.style.fontSize = '48px';
resultContainer.style.fontWeight = 'bold';
resultContainer.style.padding = "150px";
resultContainer.style.margin = "100px"



let timeSpan = document.getElementById('time');
timeSpan.style.color = '#DC143C';
timeSpan.style.fontWeight = 'bold';
timeSpan.style.fontSize = '24px';


let timeOut = Math.floor(Math.random() * 5);
console.log(timeOut)
timeSpan.innerHTML = timeOut;



let flag = false;

setTimeout(function() {
    if (!flag) {
        resultContainer.innerHTML = "you loose!";
        resultContainer.style.color = '#FF00FF';
        flag = true;
    }

}, timeOut * 1000)


function displayText() {
    if (!flag) {
        resultContainer.innerHTML = "You win!";
        resultContainer.style.color = '#FFD700';
        flag = true;
    }
}


window.addEventListener("click", displayText);