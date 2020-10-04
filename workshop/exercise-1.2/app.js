// Exercise 1.2
// ------------
console.log('exercise 1.2');
document.body.style.backgroundImage='radial-gradient(purple,blue)';
let styling=document.querySelector(".time-text");
styling.style.fontFamily='Comic Neue, cursive';
styling.style.fontSize="40px";
styling.style.color="white";
styling.style.padding="20px";

let range=Math.floor(Math.random() * 11);  
console.log("Range="+range);

let counter=document.getElementById("time");
counter.innerText=range;
let counter2=setInterval(() => {
    range=range-1;
    if(range>=0){
        counter.innerText=`${range}`;
    }
    else{
        clearInterval(counter2);
    }
}, 1000);

let result=document.querySelector("#result");
document.body.addEventListener('click', display);
result.style.fontSize="150px";
result.style.fontFamily='Comic Neue, cursive';
result.style.color="yellow";
result.style.position="absolute";
result.style.left="25%";
result.style.top="25%";

let event1=setTimeout(function(){
    result.innerText="You lose!";
    document.body.removeEventListener('click',display);
}, range*1000);

function display(){
    result.innerText="You win!";
    clearTimeout(event1);
    document.body.removeEventListener('click',display);
}