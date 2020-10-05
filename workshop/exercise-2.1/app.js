console.log("exercise 2.1")


let mainContainer = document.getElementById('main');

for (let i = 0; i < 20; i++) {
    let button = document.createElement('button');
    button.innerHTML = i + 1;
    mainContainer.appendChild(button);
    button.style.backgroundColor = 'darkred';
    button.style.color = 'white';
    button.style.fontSize = '36px';
    button.style.height = "100px";
    button.style.width = '100px';
}

let buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener("click", () =>
        (button.style.backgroundColor = 'green')
    );

})