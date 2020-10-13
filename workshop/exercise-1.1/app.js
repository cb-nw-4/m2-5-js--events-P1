// Exercise 1.1
// ------------
console.log('exercise 1.1');

let clicker = false;
document.querySelector("body").addEventListener("click", function(event) {
    clicker = true;    
});

setTimeout(function(){
    let main = document.querySelector(".result");
    clicker ? main.innerText = "You Win!" : main.innerText = "You Lose!";
}, 1000);