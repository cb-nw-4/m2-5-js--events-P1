const main = document.getElementById("main");

/* START and COUNTER CONTAINER************************ */
let start = document.createElement("div");
start.className = "startHeader";
main.appendChild(start);

/* COUNTER *******************************************/ 
let counter = 7;
const counterPara = document.createElement("p");
counterPara.className = "counter";
counterPara.innerText = `${counter}`;
start.appendChild(counterPara);
counterPara.style.display = "none";

/* BUTTONS CONTAINER ***********************************/ 
const box = document.createElement("div");
box.className="box";
main.appendChild(box);

/** WIN or LOOSE BUTTONS****************************** */
const winButton = document.createElement("button");
winButton.className = "winButton";
winButton.innerText = "You Win!!!";
box.appendChild(winButton);

const loosingButton = document.createElement("button");
loosingButton.className = "loosingButton";
loosingButton.innerText = "You lose...";
box.appendChild(loosingButton);

/*******************************
 * Function: createButtons()
********************************/
function createButtons(){
    let button;
    let numberOfButtons = Math.floor(Math.random()*Math.floor(20))+1;

    for(let i =0; i<numberOfButtons;i++){

        button = document.createElement("button");
        button.type ="button";
        button.className = "circleButton";
        button.innerText = `${i+1}`;

        button.style.position = "absolute";
        button.style.left = `${getRandX()}px`;
        button.style.top = `${getRandY()}px`;
        button.style.backgroundColor = "darkred";

        box.appendChild(button);

        button.addEventListener("click",numberButtonEvent);
    }
};

/*******************************
 * Function: numberButtonEvent()
********************************/
function numberButtonEvent(){
    if(event.target.style.backgroundColor == "darkred"){
        event.target.style.backgroundColor = "darkgreen";
    }else{
        event.target.style.backgroundColor = "darkred";
    }
}

/*******************************
 * Function: getRandX()
********************************/
function getRandX (){
    let num = Math.floor(Math.random()*Math.floor(950));
    return num;
}

/*******************************
 * Function: getRandY()
********************************/
function getRandY(){
    let num = Math.floor(Math.random()*Math.floor(550));
    return num;
}

/* START BUTTON****************************************/ 
const startButton = document.createElement("button");
startButton.className = "startButton";
startButton.innerText ="Start";
start.appendChild(startButton);
startButton.addEventListener("click", function(){
    createButtons();
    
    startButton.style.color = "#ffaa00";
    startButton.style.backgroundColor = "dimgray";
    startButton.style.border = "1px solid #ffaa00";
    startButton.style.outline = "none";
    startButton.style.transform = "scale(1.2,1.2)";
    startButton.style.transitionDuration = "0.5s";

    setTimeout(function(){
        startButton.style.display = "none";
        counterPara.style.display = "block";
        /***Countdown ************************/ 
        counterPara.innerText = `${counter}`;
        let countdown = setInterval(function(){
            if(counter==0){
                clearInterval(countdown);
                validateResults();
            }else{
                counter = counter - 1;
                counterPara.innerText = `${counter}`;
            }
        },1000);

    },500);

});

/********************************* */
// FUNCTION: validateResults()
/********************************* */
function validateResults(){
    let results = document.getElementsByClassName("circleButton");
    let win = true;

    for(let i = 0; i<results.length;i++){
        if(results[i].style.backgroundColor == "darkred"){
            win=false;}
            results[i].removeEventListener("click",numberButtonEvent);
    }

    if(win){
        console.log("you win");
        winButton.style.display = "block";
        winButton.style.animationName = "buttonScale";
        winButton.style.animationDuration = "1s";

    }else{
        console.log("you loose");
        loosingButton.style.display = "block";
        loosingButton.style.animationName = "buttonScale";
        loosingButton.style.animationDuration = "1s";
    }
};

