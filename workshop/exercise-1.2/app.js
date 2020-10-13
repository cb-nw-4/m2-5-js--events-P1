// Exercise 1.2
// ------------
console.log('exercise 1.2');

let winner = false;
let sec = Math.floor(Math.random() * 5) + 1;
document.querySelector("#time").innerHTML = sec;
document.addEventListener("click", win);

function win(){
    document.querySelector("#result").innerHTML = "You Win!";
    clearInterval(timer);
    
    winner = true;
    };

let timer = setInterval(() => {
    sec = sec - 1;
    document.querySelector("#time").innerHTML = sec;
    if (sec === 0) {
        clearInterval(timer);
        document.removeEventListener("click", win);
        if (winner === false) document.querySelector("#result").innerHTML = "You Lose!";
        }
}, 1000)