// Exercise 1.1
// ------------
console.log("exercise 1.1");

const getBody = document.querySelector("body");
const getPara = document.querySelector("p");
let timer = true;

// window.addEventListener("load", startTimer);
// getBody.addEventListener("click", clickMe);

const clickMe = () => {
  if (timer === true) {
    return (getPara.innerText = "You Won!");
  } else {
    return (getPara.innerText = "You lose!");
  }
};

const startTimer = () => {
  setTimeout(() => {
    timer = false;
    console.log(timer);
  }, 1000);

};

window.addEventListener("load", startTimer);
getBody.addEventListener("click", clickMe);


console.log(timer);