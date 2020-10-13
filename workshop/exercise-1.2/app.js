// Exercise 1.2
// ------------
const body = document.querySelector("body");
body.style.height = "100vh";
body.style.background = "radial-gradient(#000033, #000099, deepskyblue)";
const p1 = document.querySelector(".time-text");
p1.style.color = "white";
p1.style.fontSize = "40px";
const timer = document.querySelector("#time");
timer.style.color = "yellow";
let randomNum = Math.floor(Math.random() * 5) + 1;
//console.log(randomNum);
timer.innerHTML = randomNum;


const p2 = document.querySelector("#result");


let clicked = false;
document.addEventListener("click", clickedFunc);
function clickedFunc(e){
    clicked = true;
}

setTimeout(clickedOrNot, randomNum * 1000);

function clickedOrNot() {
    if (clicked === true) {
        p2.innerHTML = "You Win!"
    } else {
        p2.innerHTML = "You Lose!"
    }
}

p2.style.color = "magenta";
p2.style.fontSize = "155px";
p2.style.textAlign = "center";


console.log('exercise 1.2');
