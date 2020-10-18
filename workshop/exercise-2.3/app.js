const buttons = 20;

const body = document.querySelector("body");

const main = document.querySelector(".main");
main.style.width = "100vw";
main.style.height = "100vh";
main.style.position = "relative";

for (let number = 1; number <= buttons; number++) {
    const button = document.createElement("button");
    button.setAttribute('id', `button-${number}`);
    main.appendChild(button);
    button.innerText = number;
    button.style.width = "50px";
    button.style.height = "50px";
    button.style.borderRadius = "50%";
    button.style.backgroundColor = "firebrick";
    button.style.color = "white";
    button.style.fontSize = "20px";
    button.style.position = "absolute";
    let leftPosition = (Math.floor(Math.random() * 100));
    let topPosition = (Math.floor(Math.random() * 100));
    button.style.left = `${leftPosition}%`;
    button.style.top = `${topPosition}%`;
    button.addEventListener('click', function(buttonClick) {
        button.style.backgroundColor = "green";
        if (button.style.backgroundColor === "green") {
            button.addEventListener('click', function(buttonUnclick) {
                button.style.backgroundColor = "firebrick";
            });
        }
    });
}



