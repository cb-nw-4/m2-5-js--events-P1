let area=document.querySelector('.main');

let stopwatch=document.createElement('p');
stopwatch.innerText="00:00:00";
area.appendChild(stopwatch);

let newDiv=document.createElement('section');
area.appendChild(newDiv);

let btn1=document.createElement('button');
btn1.innerText="Start";
btn1.setAttribute('class','btn');
newDiv.appendChild(btn1);
btn1.addEventListener('click', watchStart);

let btn2=document.createElement('button');
btn2.innerText="Stop";
btn2.setAttribute('class','btn');
newDiv.appendChild(btn2);
btn2.addEventListener('click', watchStop);

let btn3=document.createElement('button');
btn3.innerText="Reset";
btn3.setAttribute('class','btn');
newDiv.appendChild(btn3);
btn3.addEventListener('click', watchReset);


//----------------------------------STOPWATCH LOGIC START-----------------------------------//
//variable declaration
let time=0;
let interval;
let offset;
let watchOn=false;

//start function
function watchStart(){
    if(!watchOn){
        interval=setInterval(update, 100);//update every 10 ms
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
    interval=0;
    stopwatch.innerText="00:00:00";
}

//update the timer and display
function update(){
    time+=delayInterval();
    let formattedTime=formatter(time);
    //console.log(formattedTime);
    stopwatch.innerText=`${formattedTime}`;
}

//offset the value
function delayInterval(){
    let newtime=Date.now();
    let timeDiff=newtime-offset;
    offset=newtime;
    return timeDiff;
}

//formatter
function formatter(timeUpdate){
    let newvar=new Date(timeUpdate);
    let mins=newvar.getMinutes();
    let secs=newvar.getSeconds();
    let millisecs=newvar.getMilliseconds();
    
    if(millisecs>99)
    {
        millisecs=Math.floor(millisecs/10);
    }
    if(secs<=9){
        secs='0'+secs;
    }
    if(mins<=9){
        mins='0'+mins;
    }
    if(millisecs<10)
    {
        millisecs='0'+millisecs;
    }

    return mins+":"+secs+":"+millisecs;
}
//-----------------------------------STOPWATCH LOGIC END-----------------------------//

area.style.display="block";
stopwatch.style.textAlign="center";
stopwatch.style.fontFamily="Lato";
stopwatch.style.fontSize="9em";
newDiv.style.display="flex";
newDiv.style.justifyContent="center";