// ALMOST COMPLETE - NEED TO ADD "REMOVEEVENTLISTENER"
let body = document.querySelector("body");
let main = document.querySelector("div");

main.style.marginTop = 100+"px";

let header = document.createElement("div");
header.setAttribute("class", "header");
body.appendChild(header);

let timer = document.createElement("p");
timer.setAttribute("id", "timer");
header.appendChild(timer);

let startButton = document.createElement("button");
startButton.setAttribute("id", "start");
header.appendChild(startButton);

startButton.innerText = "START";

startButton.addEventListener("click", startTimer);

function createDots() {
    for (let i = 1; i < 11; i++) {
        let dots = document.createElement("button");
        dots.setAttribute("class", "dots");
        main.appendChild(dots);
        dots.innerText = i;
        dots.style.left = Math.random() * 95+"vw";
        dots.style.top = Math.random() * 80+"vh";
        dots.addEventListener("click", clickDots = function() {
            dots.style.backgroundColor = "green";
        })
    }
}

function startTimer() {
    let header = document.querySelector(".header");
    let startButton = document.querySelector("#start");
    let timer = document.querySelector("#timer")
    header.removeChild(startButton);

    createDots();

    let timeLeft = 5;
    let dots = document.getElementsByClassName("dots")
    let countdown = setInterval(function() {
        if (timeLeft <= 0) {
            clearInterval(countdown);
            timer.innerHTML = "YOU LOSE!";
        } else {
            timer.innerHTML = timeLeft;
            timeLeft -= 1;
        }
    }, 1000);
}   