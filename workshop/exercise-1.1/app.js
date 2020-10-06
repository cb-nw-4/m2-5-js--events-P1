// Exercise 1.1
// ------------
console.log('exercise 1.1');
let game = false;
document.querySelector("body").addEventListener("click", function(){
    game = true;
})

setTimeout(function(){
    let reveal = document.querySelector(".result");
    game ? reveal.innerText = "You Win!" : reveal.innerText = "You Lose!";
},1000);