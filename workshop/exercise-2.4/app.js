const body = document.querySelector("body");
body.style.height = "100vh";
body.style.width = "100vw";

const main = document.querySelector("#main");
main.style.height = "100vh";
main.style.width = "100vw";
main.style.display = "flex";
main.style.flexDirection = "column";
main.style.alignItems = "center";

const headerBar = document.createElement("div");
main.appendChild(headerBar);
headerBar.style.width = "100%";
headerBar.style.height = "20%";
headerBar.style.backgroundColor = "grey";
headerBar.style.color = "white";
headerBar.style.fontSize = "40px";
headerBar.style.fontWeight = "bold";
headerBar.style.display = "flex";
headerBar.style.justifyContent = "center";
headerBar.style.alignItems = "center";

const buttonContainer = document.createElement("div");
main.appendChild(buttonContainer);
buttonContainer.style.width = "70%";
buttonContainer.style.height = "90%";
buttonContainer.style.margin = "20px";
buttonContainer.style.backgroundColor = "lightgrey";

const startButton = document.createElement("button");
headerBar.appendChild(startButton);
startButton.style.padding = "20px 40px 20px 40px";
startButton.style.margin = "5px";
startButton.style.backgroundColor = "purple";
startButton.style.color = "white";
startButton.style.fontSize = "24px";
startButton.style.borderRadius = "5px";
startButton.style.border = "2px solid black";
startButton.innerText = "START";

let numberOfButtons = Math.floor(Math.random() * 10);

let buttons = document.querySelectorAll("button");

startButton.addEventListener('click', function(startGame) {
    startButton.style.display = "none";
    buttonContainer.style.position = "relative";
    for (let i = 1; i <= numberOfButtons; i++) {
        let button = document.createElement("button");
        buttonContainer.appendChild(button);
        button.innerText = `${i}`;
        button.style.width = "40px";
        button.style.height = "40px";
        button.style.borderRadius = "50%";
        button.style.backgroundColor = "firebrick";
        button.style.color = "white";
        button.style.fontSize = "20px";
        button.style.position = "absolute";
        let leftPosition = (Math.floor(Math.random() * 90));
        let topPosition = (Math.floor(Math.random() * 90));
        button.style.left = `${leftPosition}%`;
        button.style.top = `${topPosition}%`;
        function changeColor() {
            button.style.backgroundColor = "green";
        };
        button.addEventListener('click', changeColor);
        setTimeout(function() {
            button.removeEventListener('click', changeColor);
        }, 5000);
    };

    let total = 6;
    let countdown = setInterval(() => {
        total -= 1;
        headerBar.innerText = total;
        if (total <= 0) {
        clearInterval(countdown);
        }
    }, 1000);
});

let result = setInterval(() => {
    let allButtons = document.querySelectorAll(button);
    if (allButtons.style.backgroundColor === "green") {
        const win = document.createElement("div");
        win.style.width = "70px";
        win.style.height = "50px";
        win.style.backgroundColor = "forestgreen";
        win.innerText = "You win!";
        win.style.zIndex = "1";
        headerBar.appendChild(win);
    } else {
        const lose = document.createElement("div");
        lose.style.width = "70px";
        lose.style.height = "50px";
        lose.style.backgroundColor = "red";
        lose.innerText = "You lose"
        lose.style.zIndex = "1";
        headerBar.appendChild(lose);
    }
}, 1000);



