
const formatTime = (time) => {
    let newTime = "0" + time;
    return newTime.slice(-2); 
}
let main = document.querySelector(".main div");
const d = new Date();
main.innerHTML = `${formatTime(d.getHours())} : ${formatTime(d.getMinutes())} : ${formatTime(d.getSeconds())}`;

const startClock = () => {
    timer = setInterval (() => {
        if (start.innerText === "Start")
            clearInterval(timer);
        const date = new Date();
        main.innerHTML = `${formatTime(date.getHours())} : ${formatTime(date.getMinutes())} : ${formatTime(date.getSeconds())}`;  
    }, 1000);   
}

let start = document.querySelector(".start-button");
start.addEventListener("click", function(){  
    start.innerText = start.innerText === "Start" ? "Stop" : "Start";
    start.classList.toggle("start-button-clicked" ); 
    if (start.innerText === "Stop")
        startClock();   
});      

