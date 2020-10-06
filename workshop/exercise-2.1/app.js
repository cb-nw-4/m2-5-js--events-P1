const buttons = 20;

const body = document.querySelector("body");

const main = document.querySelector("#main");

const container = document.createElement("div");
main.appendChild(container);

const subContainer1 = document.createElement("div");
subContainer1.style.display = "flex";
subContainer1.style.flexDirection = "row";
subContainer1.style.justifyContent = "center";
container.appendChild(subContainer1);

const subContainer2 = document.createElement("div");
subContainer2.style.display = "flex";
subContainer2.style.flexDirection = "row";
subContainer2.style.justifyContent = "center";
container.appendChild(subContainer2);

const subContainer3 = document.createElement("div");
subContainer3.style.display = "flex";
subContainer3.style.flexDirection = "row";
subContainer3.style.justifyContent = "center";
container.appendChild(subContainer3);


for (let number = 1; number <= 7; number++) {
    const button = document.createElement("div");
    button.setAttribute('id', `button-${number}`);
    subContainer1.appendChild(button);
    container.style.display = "flex";
    container.style.flexDirection = "column";
    const numberStyling = document.createElement("p");
    numberStyling.innerHTML = number;
    button.appendChild(numberStyling);
    button.innerText = number;
    button.style.width = "100px";
    button.style.height = "100px";
    button.style.margin = "2px";
    button.style.backgroundColor = "firebrick";
    button.style.color = "white";
    button.style.fontSize = "24px";
    button.style.display = "flex";
    button.style.justifyContent = "center";
    button.style.alignItems = "center";
    button.addEventListener('click', function(buttonClick) {
        button.style.backgroundColor = "green";
    });
}

for (let number = 8; number <= 14; number++) {
    const button = document.createElement("div");
    button.setAttribute('id', `button-${number}`);
    subContainer2.appendChild(button);
    container.style.display = "flex";
    container.style.flexDirection = "column";
    const numberStyling = document.createElement("p");
    numberStyling.innerHTML = number;
    button.appendChild(numberStyling);
    button.innerText = number;
    button.style.width = "100px";
    button.style.height = "100px";
    button.style.margin = "2px";
    button.style.backgroundColor = "firebrick";
    button.style.color = "white";
    button.style.fontSize = "24px";
    button.style.display = "flex";
    button.style.justifyContent = "center";
    button.style.alignItems = "center";
    button.addEventListener('click', function(buttonClick) {
        button.style.backgroundColor = "green";
    });
}

for (let number = 15; number <= 20; number++) {
    const button = document.createElement("div");
    button.setAttribute('id', `button-${number}`);
    subContainer3.appendChild(button);
    container.style.display = "flex";
    container.style.flexDirection = "column";
    const numberStyling = document.createElement("p");
    numberStyling.innerHTML = number;
    button.appendChild(numberStyling);
    button.innerText = number;
    button.style.width = "100px";
    button.style.height = "100px";
    button.style.margin = "2px";
    button.style.backgroundColor = "firebrick";
    button.style.color = "white";
    button.style.fontSize = "24px";
    button.style.display = "flex";
    button.style.justifyContent = "center";
    button.style.alignItems = "center";
    button.addEventListener('click', function(buttonClick) {
        button.style.backgroundColor = "green";
    });
}
