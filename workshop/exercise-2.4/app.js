
let main = document.querySelector(".main");

let start = document.querySelector(".button-start");



//create all buttons;
const createButtons = ()=> {
    for(let i=0; i< 20; i++) {
        let myButton = document.createElement("button");
        myButton.innerText = i + 1;   
        myButton.classList.add("button-round");    
        main.appendChild(myButton);    
    }
}

//make only some buttons appears
let buttonsArr = null;
let clickedCount = 0;
let randomNumber = 0;

const handleButtonClick = (event)=> {
    if (!event.currentTarget.classList.contains("button-clicked")) {clickedCount++};
    event.currentTarget.classList.add("button-clicked"); 

}

const addButtons = ()=> {
    randomNumber = Math.floor(Math.random() * 19) + 1;
    buttonsArr = document.querySelectorAll(".button-round");
    for(let i=0; i< randomNumber; i++) {   
        const randomLeft = Math.floor(Math.random() * 90);  
        buttonsArr[i].style.left = `${randomLeft}%`;
        const randomTop = Math.floor(Math.random() * 90);  
        buttonsArr[i].style.top = `${randomTop}%`;  
        buttonsArr[i].style.display = "block";  
        buttonsArr[i].addEventListener("click", handleButtonClick );
    }
}

//remove buttons:
const removeButtons = ()=> {       
    for(let i=0; i< randomNumber; i++) {   
        buttonsArr[i].style.display = "none"; 
        buttonsArr[i].classList.remove("button-clicked");
    }
    let result = document.querySelector(".result");   
    result.innerText = "";
    result.style.display = "none";
    clickedCount = 0;
    randomNumber = 0;
}
//remove eventlistener
const removeEventListener = ()=> {
    for(let i=0; i< randomNumber; i++) {     
        console.log("removelis");
        buttonsArr[i].removeEventListener("click", handleButtonClick);
    }
}

const SetResults = ()=> {
    setTimeout(function(){       
        let result = document.querySelector(".result");  
        console.log("Clickcount:"  + clickedCount);
        console.log("randomNumber:"  + randomNumber);
        result.style.display = "flex";
        if( clickedCount ===  randomNumber) {
            result.innerText = "You Win!";
            result.style.backgroundColor = "darkgreen";
        } 
        else {
            result.innerText = "You Lose!";
            result.style.backgroundColor = "darkred";
        }
        removeEventListener();
    }, 5000);
}

const SetTimer = ()=> {
    let count = 5;
    let timer = document.querySelector(".timer");
    let startButtons = document.querySelector(".button-start");
    startButtons.style.display = "none";
    timer.style.display = "block";
    timer.innerText = count;
    const interval = setInterval(() => {
        
        count--;
        timer.innerText = count;
       
        if(count <  0)  {
            startButtons.style.display = "block";
            timer.style.display = "none";
            clearInterval(interval);           

        }        
        
    }, 1000);
}


/*main program*/
createButtons();

start.addEventListener("mouseup", function(){
   // removeEventListener();
    removeButtons();
    addButtons();
    SetTimer();
    SetResults();
    
});

// const randomDelay = Math.floor(Math.random() * 4) + 1;
// let time = document.querySelector("#time");
// time.innerText = randomDelay;

