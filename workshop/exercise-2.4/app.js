console.log('exercise 2.4');

let main = document.querySelector('.main'); 
main.style.width="100%";
main.style.height="100%";
main.style.color="white";

let section1 = document.createElement('div');
main.appendChild(section1);
section1.setAttribute('id','section1');
section1.setAttribute('class','section1');
section1.style.width="100%"; 
section1.style.height = "16%"; 
section1.style.backgroundColor="grey";
section1.style.display="flex";
section1.style.justifyContent="center";
section1.style.alignItems="center";

let buttonStart = document.createElement('button'); 
section1.appendChild(buttonStart); 
buttonStart.innerText=("START"); 
section1.setAttribute('class','buttonStart');
buttonStart.style.backgroundColor="yellow";
buttonStart.style.fontSize="1.5em";
buttonStart.style.color="grey";
buttonStart.style.padding="1%";
buttonStart.style.width="20%";
buttonStart.style.height="50%";
buttonStart.style.border="none";
buttonStart.addEventListener("mouseover",()=> { 
    buttonStart.style.backgroundColor="grey";
    buttonStart.style.color="yellow";
    buttonStart.style.border="2px solid yellow";
    buttonStart.style.transform= "scale(1.2)";
})
buttonStart.addEventListener("mouseout",()=> { 
    buttonStart.style.backgroundColor="yellow";
    buttonStart.style.color="grey";
    buttonStart.style.border="none";
    buttonStart.style.transform= "scale(1)";
})

let rest = document.createElement('div'); 
main.appendChild(rest);
rest.style.height="84%";
rest.style.width="100%";
rest.style.display="flex";
rest.style.justifyContent="center";
rest.style.alignItems="center";
let section2 = document.createElement('div'); 
rest.appendChild(section2); 
section2.setAttribute('id','section2');
section2.setAttribute('class','section2');
section2.style.width="70%"; 
section2.style.height = "80%"; 
section2.style.backgroundColor="lightgrey";
section2.style.display="flex"; 
section2.style.justifyContent="center";
section2.style.alignItems="center";

let numberOfButtons = Math.floor(Math.random()*8);
    if (numberOfButtons ===0) { numberOfButtons=1;}
    console.log(numberOfButtons); 
let timer;
let countDownTimer;
let buttonColorChangeCount = 0; 
let resultButton = document.createElement('button');
    resultButton.style.height="20%";
    resultButton.style.width="20%";
    resultButton.style.border="none";
    resultButton.style.color="white";
    resultButton.style.fontSize="1.5em";
    resultButton.style.zIndex="+1";

buttonStart.addEventListener("click", onclick);

function onclick (event) { 
    buttonStart.remove(); 
    section1.innerText=("5");
    section1.style.fontSize="1.5em";
    section1.style.fontWeight="bold";
    section2.style.position="relative";
    for( let i = 1; i<=numberOfButtons; i++) {
        let button = document.createElement('button'); 
        button.setAttribute("id","button"+i); 
        button.innerText=(i);
        section2.appendChild(button);
        button.style.height="40px";
        button.style.width="40px";
        button.style.color="white"; 
        button.style.backgroundColor="#8b0000";
        button.style.border="none";
        button.style.borderRadius="50%";
        button.style.fontSize ="1.2em";
        button.style.fontWeight ="bold";
        button.style.position="absolute"; 
        button.style.top= Math.floor(Math.random() * 90)+"%"; 
        button.style.left= Math.floor(Math.random() * 90)+"%";
        button.setAttribute("class","red");
        button.addEventListener("click",buttonChangeColor);
    }; 
    let buttons = document.querySelectorAll('button');
    console.log(buttons);
    let countdown = 5; 
    timer = setInterval(()=>{
        section1.innerText=(countdown);
        if(countdown===0) { 
            section2.appendChild(resultButton);
            resultButton.innerText=("You Lose!!");
            resultButton.style.backgroundColor="red";
            buttons.forEach ((element)=> { 
                element.removeEventListener("click",buttonChangeColor);
            }); 
            clearInterval(timer);
        }
        countdown--; 
    },1000); 
}; 
    

function buttonChangeColor (event) { 
    if(event.currentTarget.className === "red") { 
        event.currentTarget.style.backgroundColor="#006400";
        event.currentTarget.setAttribute("class","green");
        buttonColorChangeCount++;
        console.log(buttonColorChangeCount,"green");
        if(buttonColorChangeCount === numberOfButtons) { 
            console.log(buttonColorChangeCount, numberOfButtons, "all clicked");
            clearTimeout(timer);
            clearTimeout(countDownTimer);
            section2.appendChild(resultButton);
            resultButton.innerText=("You Win!!");
            resultButton.style.backgroundColor="green";
        };
    };
}; 

