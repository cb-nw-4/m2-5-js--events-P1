// Exercise 1.1
// ------------
console.log('exercise 1.1');

let isClicked = false;
document.querySelector("body").addEventListener("click", function(event) {
    isClicked = true;    
});

setTimeout(function(){
    let main = document.querySelector(".result");
    isClicked ? main.innerText = "You Win!" : main.innerText = "You Lose!";
}, 1000);