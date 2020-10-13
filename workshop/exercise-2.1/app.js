main = document.querySelector(".main");
main.style.textAlign = "center";
div1 = document.createElement("div");
div2 = document.createElement("div");
div3 = document.createElement("div");
main.appendChild(div1);
main.appendChild(div2);
main.appendChild(div3);
//console.log(main);


for (let btn = 1; btn < 21; btn++) {
    btns = document.createElement("button");
    btns.innerHTML = btn;
    btns.style.backgroundColor = "darkred";
    btns.style.color = "white";
    btns.style.fontSize = "30px";
    btns.style.height = "120px";
    btns.style.width = "120px";
    btns.style.margin = "2px";
    btns.style.border = "none";
    if (btn < 8) {
        div1.appendChild(btns);
    } else if (btn < 7 || btn < 15) {
        div2.appendChild(btns);
    } else {
        div3.appendChild(btns);
    }
}

const buttons = document.querySelectorAll("button");
//console.log(buttons);

for (let i = 0 ; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function(e) {
        buttons[i].style.backgroundColor = "darkgreen";
    });
}


console.log('exercise 2.1');
