console.log("exercise 2.1")


let mainContainer = document.getElementById('main');

for (let i = 0; i < 20; i++) {
    let button = document.createElement('button');
    button.innerHTML = i + 1;
    mainContainer.appendChild(button);
    button.style.backgroundColor = '#B22222';
    button.style.color = 'white';
    button.style.fontSize = '36px';
    button.style.height = "100px";
    button.style.width = '100px';
}


let buttons = document.querySelectorAll('button');
let flags = [];
for (let i = 0; i < 20; i++) {
    flags.push(false);
}


buttons.forEach((button, i) => {
    button.addEventListener("click", (e) => {
        if (flags[i]) {
            (e.currentTarget.style.backgroundColor = '#B22222');
            flags[i] = false;
        } else {
            (e.currentTarget.style.backgroundColor = '#2E8B57');
            flags[i] = true;
        }
    })
})