// Exercise 1.2
// ------------
console.log('exercise 1.2');


let range=Math.floor(Math.random() * 11);  
console.log("Range="+range);

let counter=document.getElementById("time");
counter.innerText=range;
let counter2=setInterval(() => {
    range=range-1;
    counter.innerText=`${range}`;
    if(range===0){
        clearInterval(counter2);
    }
}, 1000);


let result=document.querySelector("#result");
document.body.addEventListener('click', display);

let event1=setTimeout(function(){
    result.innerText="You lose!";
    document.body.removeEventListener('click',display);
}, range*1000);

function display(){
    result.innerText="You win!";
    clearTimeout(event1);
    document.body.removeEventListener('click',display);
}