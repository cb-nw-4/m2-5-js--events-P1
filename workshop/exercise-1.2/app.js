// Exercise 1.2
// ------------
console.log('exercise 1.2');

const getBody = document.querySelector("body");
// const getPara = document.querySelector(".time-text");
const getFinished = document.querySelector('.result')
const getSpan = document.querySelector('span')

let timer = true;
let countdown = random(); 

function random () {
  return Math.round(Math.random() * 5)
}
getSpan.innerText = countdown




const clickMe = () => {
  if (timer === true) {
    return (getFinished.innerText = "You Won!");
  } else {
    return (getFinished.innerText = "You lose!");
  }
};

const startTimer = () => {
  setTimeout(() => {
    timer = false;
    console.log(timer);
  }, random() * 1000);

};

window.addEventListener("load", startTimer);
getBody.addEventListener("click", clickMe);
