const MAX_BUTTONS_NUMBER = 12;
let buttonsArr = null;
let clickedCount = 0;
let randomNumber = 0;

/*add the buttons in the game*/
const addButtons = ()=> {
    randomNumber = Math.floor(Math.random() * MAX_BUTTONS_NUMBER) + 1;
    buttonsArr = document.querySelectorAll(".button-round");
    for(let i=0; i< randomNumber; i++) {   
        const randomLeft = Math.floor(Math.random() * 90);  
        buttonsArr[i].style.left = `${randomLeft}%`;
        const randomTop = Math.floor(Math.random() * 90);  
        buttonsArr[i].style.top = `${randomTop}%`;  
        buttonsArr[i].style.display = "block";  
        buttonsArr[i].addEventListener("click", handleButtonClick);
    }
}

//creates all buttons;
const createButtons = ()=> {
    let main = document.querySelector(".main");
    for(let i=0; i < MAX_BUTTONS_NUMBER; i++) {
        let myButton = document.createElement("button");
        myButton.innerText = i + 1;   
        myButton.classList.add("button-round");    
        main.appendChild(myButton);    
    }
}

//Handle the button click
const handleButtonClick = (event)=> {
    if (!event.currentTarget.classList.contains("button-clicked")) {clickedCount++};
    event.currentTarget.classList.add("button-clicked"); 
}

//remove buttons on the game:
const removeButtons = ()=> {       
    for(let i=0; i< randomNumber; i++) {   
        buttonsArr[i].style.display = "none"; 
        buttonsArr[i].classList.remove("button-clicked");
    }
    let result = document.querySelector(".result");   
    result.innerText = "";    
    result.style.height = "0";
    result.style.width = "0";
    clickedCount = 0;
    randomNumber = 0;
}

//Remove eventlistener
const removeEventListener = ()=> {
    for(let i=0; i< randomNumber; i++) {    
        buttonsArr[i].removeEventListener("click", handleButtonClick);
    }
}

//Gives the result of the game and remove the evenListener.
const setResults = ()=> {
    setTimeout(function(){       
        let result = document.querySelector(".result");         
        result.style.height = "180px";
        result.style.width = "280px";
        if (clickedCount ===  randomNumber) {
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

//Start the timer.
const startTimer = ()=> {
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

 // Start the game
const startGame = () => {   
    createButtons();
    let start = document.querySelector(".button-start");
    start.addEventListener("mouseup", function(){  
        removeButtons();
        addButtons();    
        startTimer();
        setResults();    
    });
}

/*main program*/
startGame();


