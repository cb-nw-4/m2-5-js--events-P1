// Exercise 3.2
// ------------
console.log('exercise-3.2');
const div = document.querySelector("div");
div.innerHTML = "00 : 00 : 000";

const section = document.querySelector("section");

const start = document.createElement('button');
start.innerText = `start`;
section.appendChild(start);

const stop = document.createElement('button');
stop.innerText = `stop`;
stop.style.display = "none";
section.appendChild(stop);

const reset = document.createElement('button');
reset.innerText = `reset`;
section.appendChild(reset);

let mm = 0;
let s = 0;
let m = 0;
let countmm;
let counts;
let countm;

//buttons config
start.onclick = function() {
    stop.style.display = "inline-block";
    start.style.display = "none";
    let fmm = 0;
    let fs = 0;
    let fm = 0;
    countmm = setInterval(() => {
        mm = mm + 1;
        if (mm > 999) {
            mm = 0;
        } 
        fmm = addZeros(mm);
        fs = addZero(s);
        fm = addZero(m);
        div.innerHTML = fm + " : " + fs + " : " + fmm;
    }, 1);
    counts = setInterval(() => {
        s = s + 1;
        if (s > 59) {
            s = 0;
        } 
        fs = addZero(s);
        div.innerHTML = fm + " : " + fs + " : " + fmm;
    }, 1000);
    countm = setInterval(() => {
        m = m + 1;
        if (m > 59) {
            m = 0;
        } 
        fm = addZero(m);
        div.innerHTML = fm + " : " + fs + " : " + fmm;
        playAudio();
    }, 60000);
    playAudio();
}

stop.onclick = function() {
    clearInterval(countmm);
    clearInterval(counts);
    clearInterval(countm);
    stop.style.display = "none";
    start.style.display = "inline-block";
}

reset.onclick = function() {
    mm = 0;
    s = 0;
    m = 0;
    clearInterval(countmm);
    clearInterval(counts);
    clearInterval(countm);
    stop.style.display = "none";
    start.style.display = "inline-block";
    div.innerHTML = "00 : 00 : 000";
}

// number formating
function addZeros(i) {
    if (i < 10) {
        i = "00" + i;
    } else if (i < 100) {
        i = "0" + i;
    }
    return i;
}

function addZero(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

//play audio
let audio = document.getElementById("myAudio"); 
function playAudio() { 
    audio.play(); 
} 