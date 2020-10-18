// Exercise 1.2 COMPLETE
// ------------
let body = document.querySelector("body");
let result = document.querySelector(".result");
let quickerClicker = document.createElement("p");
quickerClicker.setAttribute("class", "quickClick");
body.appendChild(quickerClicker);

timer();

let clickEvent = false;
setTimeout(function () {
    if (!clickEvent) {
        result.innerText = "You Lose!";
        document.removeEventListener("click", clicked);
        console.log("You lose!")
    }
}, 4000)

function clicked() {
    clickEvent = true;
    result.innerText = "You Win!"
    document.removeEventListener("click", clicked);
    console.log("You win!")
}

function timer() {
    let timeLeft = 3;
    let time = document.querySelector("#time");
    let countdown = setInterval(function() {
        if (timeLeft < 0) {
            clearInterval(countdown);
        } else {
            time.innerHTML = timeLeft;
            timeLeft -= 1;
        }
    }, 1000)
}

document.addEventListener("click", clicked);

console.log('exercise 1.1');

console.log('exercise 1.2');
