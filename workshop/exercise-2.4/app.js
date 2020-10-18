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
buttonContainer.style.display = "flex";
buttonContainer.style.justifyContent = "center";
buttonContainer.style.alignItems = "center";

const startButton = document.createElement("div");
headerBar.appendChild(startButton);
startButton.style.padding = "20px 40px 20px 40px";
startButton.style.margin = "5px";
startButton.style.backgroundColor = "purple";
startButton.style.color = "white";
startButton.style.fontSize = "24px";
startButton.style.borderRadius = "5px";
startButton.style.border = "2px solid black";
startButton.innerText = "START";

const result = document.createElement("div");
buttonContainer.appendChild(result);
result.style.width = "200px";
result.style.height = "150px";
result.style.fontSize = "40px";
result.style.fontWeight = "bold";
result.style.display = "flex";
result.style.justifyContent = "center";
result.style.alignItems = "center";
result.style.color = "white";
result.style.borderRadius = "5px";

let numberOfButtons = Math.floor((Math.random() * 10) + 1);

startButton.addEventListener('click', function(startGame) {
    startButton.style.display = "none";
    buttonContainer.style.position = "relative";
    for (let i = 1; i <= numberOfButtons; i++) {
        let roundButton = document.createElement("button");
        buttonContainer.appendChild(roundButton);
        roundButton.innerText = `${i}`;
        roundButton.style.width = "40px";
        roundButton.style.height = "40px";
        roundButton.style.borderRadius = "50%";
        roundButton.style.backgroundColor = "firebrick";
        roundButton.style.color = "white";
        roundButton.style.fontSize = "20px";
        roundButton.style.position = "absolute";
        roundButton.style.margin= "20px";
        let leftPosition = (Math.floor(Math.random() * 90));
        let topPosition = (Math.floor(Math.random() * 90));
        roundButton.style.left = `${leftPosition}%`;
        roundButton.style.top = `${topPosition}%`;
        function changeColor() {
            roundButton.style.backgroundColor = "green";
            greenButtons.push(roundButton)
        };
        roundButton.addEventListener('click', changeColor);
        setTimeout(function() {
            roundButton.removeEventListener('click', changeColor);
            if (numberOfButtons === greenButtons.length) {
                result.style.backgroundColor = "green";
                result.innerText = "You win!";
                result.style.zIndex = "1";
            } else {
                result.style.backgroundColor = "red";
                result.innerText = "You lose!"
                result.style.zIndex = "1";
            }
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

let buttons = document.querySelectorAll("roundButton");

let greenButtons = [];


