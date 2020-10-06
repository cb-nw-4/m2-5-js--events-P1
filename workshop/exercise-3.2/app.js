let strbtn = document.createElement("button");
strbtn.innerHTML = "Start";
strbtn.setAttribute("class","Start");
document.querySelector(".main").appendChild(strbtn);

let stpbtn = document.createElement("button");
stpbtn.innerHTML = "Stop";
stpbtn.setAttribute("class","Stop");
document.querySelector(".main").appendChild(stpbtn);

let resbtn = document.createElement("button");
resbtn.innerHTML = "Reset";
resbtn.setAttribute("class","Reset");
document.querySelector(".main").appendChild(resbtn);

let secs = 0;
let stop =0;
let time = document.createElement("p");
time.innerHTML = "0 secs";
document.querySelector(".main").appendChild(time);

function countUp(){
    if (stop === 0) 
    {
        secs=secs+1;
        time.innerHTML = secs+" secs";
    } 
}

function stopCount()
{
    stop = 1;   
    return;
}

function resetCount()
{
    secs = 0; 
    time.innerHTML = secs+" secs";
}

function initCount(){
    let interval = setInterval(countUp, 1000);
        if (stop ===1 ) clearInterval(interval);
    stop = 0;
    }

document.querySelector(".Start").addEventListener("click", initCount);
document.querySelector(".Stop").addEventListener("click", stopCount);
document.querySelector(".Reset").addEventListener("click", resetCount);