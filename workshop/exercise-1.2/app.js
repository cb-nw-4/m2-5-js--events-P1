// Exercise 1.2
// ------------
console.log('exercise 1.2');

const body = document.querySelector("body");
const winPara = document.getElementById("result");
let timeTextArray = document.getElementsByClassName("time-text");
const timeText = timeTextArray[0];

/* Body style */ 
body.style.margin = 0;
body.style.height = "100vh";
body.style.backgroundImage = "radial-gradient(black,blue)";
body.style.textAlign = "center";
body.style.fontFamily = "tahoma";
body.style.fontSize = "2rem";
body.style.color = "white";

/* YOU HAVE X SEC style*/ 
timeText.style.margin = 0;
timeText.style.padding = "20px";

/* You win/loose style*/ 
winPara.style.margintop = "30px";
winPara.style.color = "pink";
winPara.style.fontSize = "7rem";
winPara.style.position = "absolute";
winPara.style.width = "100%";
winPara.style.bottom = "30vh";

/* Random number between 1 and 3 */ 
let timeToDisplay = Math.floor(Math.random()*3)+1;
let timeToClick = timeToDisplay*1000;
let userWins = true;

/* Insert the number of seconds in text */ 
let number = document.createElement("span");
number.innerText=`${timeToDisplay} `;
timeText.insertBefore(number,document.getElementById("time"));
number.style.color = "red";


setTimeout(function(){userWins = false;}, timeToClick);

body.addEventListener("click",function(){
    if(userWins){
        document.getElementById("result").innerHTML = "You Win !";
    }else{
        document.getElementById("result").innerHTML = "You Loose !";
    }
});

/* Countdown */
let intervalCount = timeToDisplay;
setInterval(function(){
    if(intervalCount==0){
        clearInterval();
    }else{
        timeToDisplay = timeToDisplay - 1;
        number.innerText=`${timeToDisplay} `;
        intervalCount = intervalCount - 1;
    }
},1000);