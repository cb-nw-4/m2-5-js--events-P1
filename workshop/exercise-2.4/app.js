let body = document.querySelector("body");
let main = document.querySelector("div");

main.style.marginTop = 100+"px";

let header = document.createElement("div");
header.setAttribute("class", "header");
body.appendChild(header);

let startButton = document.createElement("button");
startButton.setAttribute("id", "start");
header.appendChild(startButton);

header.style.backgroundColor = "grey";
header.style.position = "fixed";
header.style.width = 100+"%";
header.style.top = "0";
header.style.left = "0";
header.style.textAlign = "center";
header.style.marginBottom = "10px";
header.style.height = 70+"px";

startButton.innerText = "START";
startButton.style.fontSize = 24+"px";
startButton.style.backgroundColor = "yellow";
startButton.style.color = "black";
startButton.style.width = 100+"px";
startButton.style.height = 50+"px";
startButton.style.margin = "10px 0px";

startButton.addEventListener("click", startTimer);

function startTimer() {
    let header = document.querySelector(".header");
    let startButton = document.querySelector("#start")
    header.removeChild(startButton);
}

createDots();

function createDots() {
    for (let i = 1; i < 11; i++) {
        let dots = document.createElement("button");
        dots.setAttribute("class", "dots");
        main.appendChild(dots);
        dots.innerText = i;
        dots.style.color = "#fff";
        dots.style.fontSize = 24+"px";
        dots.style.height = 50+"px";
        dots.style.width = 50+"px";
        dots.style.borderRadius = 100+"%";
        dots.style.backgroundColor = "#800020"; 
        dots.style.borderStyle = "none";
        dots.style.position = "absolute";
        dots.style.marginTop = 70+"px";
        dots.style.left = Math.random() * 95+"vw";
        dots.style.top = Math.random() * 80+"vh";
        dots.addEventListener("click", function() {
            dots.style.backgroundColor = "green";
        })
    }
}

// let clickEvent = false;
// setTimeout(function () {
//     if (!clickEvent) {
//         result.innerText = "You Lose!";
//         document.removeEventListener("click", clicked);
//         console.log("You lose!")
//     }
// }, 1000)
