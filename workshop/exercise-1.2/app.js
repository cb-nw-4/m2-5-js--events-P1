// Exercise 1.2
// ------------
console.log('exercise 1.2');
let totalTime = Math.floor(Math.random() * 5000)
let timeSelector = document.getElementById("time")

timeSelector.innerHTML = (totalTime/1000)

let userLost = false

setTimeout(function(){
    userLost = true;
}, totalTime)

document.addEventListener("click", function (){
    if(userLost){
        document.getElementById("result").innerHTML = "you lost"
    }else{
        document.getElementById("result").innerHTML = "you won"
    }
})


// console.log(time)