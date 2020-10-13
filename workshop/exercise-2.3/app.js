main = document.querySelector(".main");

for (let btn = 1; btn < 21; btn++) {
    btns = document.createElement("button");
    main.appendChild(btns);
    btns.innerHTML = btn;
    btns.classList.add("button-style");
    btns.classList.add("button-not-clicked");

    btns.style.position = "absolute";
    let randomX = (Math.floor(Math.random() * 90)) + "%";
    let randomY = (Math.floor(Math.random() * 90)) + "%";
    //console.log(randomX);
    //console.log(randomY);
    btns.style.top = randomY; 
    btns.style.left = randomX;
}

const buttons = document.querySelectorAll("button");

for (let i = 0 ; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function(e) {
        buttons[i].classList.toggle("button-clicked");
    });
}


console.log('exercise 2.3');
