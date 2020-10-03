// Exercise 1.1
// ------------
console.log('exercise 1.1');
document.addEventListener("click", win);
let winner = false;

function win(){
    document.querySelector(".result").innerHTML = "You Won!";
    document.removeEventListener("click", lose);
    winner = true;
}

setTimeout(() => {
    document.removeEventListener("click", win);
    if (winner === false) document.addEventListener("click", lose); 
}, 1000);


function lose(){
    document.querySelector(".result").innerHTML = "Too Slow!";
    winner = false;
}


