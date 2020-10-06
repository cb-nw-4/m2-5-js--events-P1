let area=document.querySelector('.main');
let btn=document.createElement('button');
btn.innerText="Start";
area.appendChild(btn);
btn.addEventListener('click', watchStart);

let btn2=document.createElement('button');
btn2.innerText="Stop";
area.appendChild(btn2);
btn2.addEventListener('click', watchStop);

//variable declaration
let time=0;
let interval;
let offset;
let watchOn=false;

//start function

function watchStart(){
    if(!watchOn){
        interval=setInterval(update, 10);//update every 10 ms
        offset=Date.now();//gets the time in ms
        watchOn=true;
    }
}

//stop function
function watchStop(){
    if(watchOn){
        clearInterval(interval);
        watchOn=false;
    }
}

//reset function
function watchReset(){
    time=0;
}


//update the timer and display
function update(){
    time+=delayInterval();
    console.log(time);

}

//offset the value
function delayInterval(){
    let newtime=Date.now();
    let timeDiff=newtime-offset;
    offset=newtime;
    return timeDiff;
}

//formatter
function formatter(){}
