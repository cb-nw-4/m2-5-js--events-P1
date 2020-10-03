// Exercise 1.1
// ------------
console.log('exercise 1.1');

// const timeOut = document.body.addEventListener("click", 1000);
// console.log(timeOut) // Some how test is this shows true of false

let userLost = false;

setTimeout(function(){
userLost= true;
}, 1000)


document.addEventListener("click", function(){
  if (userLost){
    document.getElementById("result").innerHTML = "You Lost";

  } else {
    document.getElementById("result").innerHTML = "You Won";

  }

  });

