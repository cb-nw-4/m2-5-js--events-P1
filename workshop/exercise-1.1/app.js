// Exercise 1.1
// ------------
console.log('exercise 1.1');
let userLost = false
setTimeout(function (){
    userLost= true;

}, 1000)

document.addEventListener("click", function (){
    if(userLost) {
        document.getElementById("result").innerHTML = "you lost"
    }else {
        document.getElementById("result").innerHTML = "you won"
    }
})