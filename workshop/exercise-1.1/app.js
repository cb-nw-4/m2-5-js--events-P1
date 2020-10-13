// Exercise 1.1
// ------------
const body = document.querySelector("body");
body.style.height = "100vh";
body.style.background = "radial-gradient(#000033, #000099, deepskyblue)";

const p = document.querySelector("#result");

const quickClick = document.createElement("h1");
quickClick.innerHTML = "Be a quicker clicker";
quickClick.style.color = "white";
quickClick.style.fontSize = "30px";
body.appendChild(quickClick);
body.insertBefore(quickClick, p);
console.log(quickClick);

let clicked = false;
document.addEventListener("click", clickedFunc);
function clickedFunc(e){
    clicked = true;
}

setTimeout(clickedOrNot, 1000);

function clickedOrNot() {
    if (clicked === true) {
        p.innerHTML = "You Win!"
    } else {
        p.innerHTML = "You Lose!"
    }
}

p.style.color = "magenta";
p.style.fontSize = "155px";
p.style.textAlign = "center";

console.log('exercise 1.1');
