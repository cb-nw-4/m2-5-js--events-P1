// Exercise 1.1
// ------------
let body = document.querySelector("body");
let result = document.querySelector(".result");
let quickerClicker = document.createElement("p");
quickerClicker.setAttribute("class", "quickClick");
body.appendChild(quickerClicker);

body.style.backgroundColor = "#483D8B";
body.style.fontFamily = "Comic Sans MS"

quickerClicker.innerText = "Be a quicker clicker";
quickerClicker.style.color = "#fff";
quickerClicker.style.position = "absolute";
quickerClicker.style.top = 0;

result.style.textAlign = "center";
result.style.marginTop = "200px";
result.style.fontWeight = "bold"
result.style.color = "#FF1493";
result.style.fontSize = "125px";

let clickEvent = false;
setTimeout(function () {
    if (!clickEvent) {
        result.innerText = "You Lose!";
        document.removeEventListener("click", clicked);
        console.log("You lose!")
    }
}, 1000)

function clicked() {
    clickEvent = true;
    result.innerText = "You Win!"
    document.removeEventListener("click", clicked);
    console.log("You win!")
}

document.addEventListener("click", clicked);

console.log('exercise 1.1');
