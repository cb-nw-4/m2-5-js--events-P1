// ALMOST COMPLETE - NEED TO FIX EVENTLISTENER
let body = document.querySelector("body");
let main = document.querySelector("#main");
let btns = document.getElementsByClassName("buttons");
let dots = 20;

buttons();

function buttons() {
    for (let count = 1; count <= dots; count++) {
        let btn = document.createElement("button");
        btn.innerText = count;
        btn.style.backgroundColor = "FireBrick";
        btn.setAttribute("class", "buttons")
        main.appendChild(btn);
        btn.addEventListener("click", function() {
            let btnColor = btn.style.backgroundColor;
            if (btnColor = "FireBrick") {
                btn.style.backgroundColor = "green";
            } else if (btnColor != "FireBrick") {
                btn.style.backgroundColor = "FireBrick";
            }
        })
    }
}

// for (let i = 0; i < btns.length; i++) {
// btn.addEventListener("click", function() {
//     let btnColor = btn.style.backgroundColor;
//     if (btnColor = "#800020") {
//         btn.style.backgroundColor = "green";
//     } else {
//         btn.style.backgroundColor = "#800020";
//     }
// })
// }