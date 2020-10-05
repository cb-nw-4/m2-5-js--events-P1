let mainContainer = document.getElementById('main');

//create Div for button and counterDown

let divContainer = document.createElement('div');
mainContainer.appendChild(divContainer);

//Styling divContainer
divContainer.style.backgroundColor = 'gray';
divContainer.classList = "div-1"



let startButton = document.createElement('button');
startButton.id = 'startButton';
startButton.innerHTML = "START";
divContainer.appendChild(startButton);

//Styling startButton

startButton.style.padding = "10px";
startButton.style.backgroundColor = '#FFD700';
startButton.style.color = "#778899";
startButton.style.fontSize = '36px';
startButton.style.height = '70px';



let divGame = document.createElement('div');
mainContainer.appendChild(divGame);


//Styling divGame
divGame.style.position = 'relative';


let flags = [];

let maxWidth = 800;
let maxHeigth = 500;
let numRandom = Math.floor(Math.random() * 10);

//create flags array

for (let i = 0; i < numRandom; i++) {
    flags.push(false);
}

let buttons = [];




let timeRandom = Math.floor(Math.random() * 5);
let timeOut = timeRandom * 1000;

const gameBegin = () => {


    //hide button start 
    startButton.style.display = 'none';

    //create SPAN countDown
    let spanContainer = document.createElement('span');

    //Styling the spanContainer

    spanContainer.style.color = "white";
    spanContainer.style.fontSize = '36px';

    let seconds = timeRandom;
    spanContainer.innerHTML = seconds;
    divContainer.appendChild(spanContainer);

    var countDown = setInterval(() => {
        if (seconds > 0) {
            seconds--;

            spanContainer.innerHTML = seconds;
        } else if (seconds <= 0) clearInterval(countDown)

    }, 1000)

    //create random buttons

    for (let i = 0; i < numRandom; i++) {
        let button = document.createElement('button');
        button.id = i;
        button.innerHTML = i;
        divGame.appendChild(button);

        //Create buttons array
        buttons.push(button);

        //Styling buttons 
        button.style.borderRadius = "50%";
        button.style.padding = "10px";
        button.style.backgroundColor = '#B22222';
        button.style.color = 'white';
        button.style.fontSize = '36px';
        button.style.width = "80px"
        button.style.position = 'absolute';


    }
    console.log(buttons)

    buttons.forEach((button, i) => {

        button.addEventListener('click', (e) => {
            if (flags[i]) {
                (e.currentTarget.style.backgroundColor = '#B22222');

                flags[i] = false;
            } else {
                (e.currentTarget.style.backgroundColor = '#2E8B57');
                flags[i] = true;
            }
        })
    })

    const move = () => {
        buttons.forEach((button) => {
            let leftRandomPositon = Math.floor(Math.random() * maxWidth);
            let topRandomPositon = Math.floor(Math.random() * maxHeigth);

            button.style.left = `${leftRandomPositon}px`;
            button.style.top = `${topRandomPositon}px`;
        })

    }
    window.setInterval(move(), 1000);

    let divMessage = document.createElement('div');
    divGame.appendChild(divMessage);

    //Styling divMessage 
    divMessage.style.borderRadius = "10px";
    divMessage.style.padding = "40px";
    divMessage.style.color = 'white';
    divMessage.style.fontSize = '36px';
    divMessage.style.width = "200px";
    divMessage.style.height = "80px";
    divMessage.style.position = 'relative';
    divMessage.style.animation = "mooveBox 3s";

    setTimeout(() => {
        if (flags.every(flag => flag == true)) {
            divMessage.innerHTML = 'You Win!!!';
            divMessage.style.backgroundColor = '#3CB371';


        } else {
            divMessage.innerHTML = "You loose...";
            divMessage.style.backgroundColor = '#DC143C';
        }
    }, timeOut);
}

















startButton.addEventListener('click', gameBegin);