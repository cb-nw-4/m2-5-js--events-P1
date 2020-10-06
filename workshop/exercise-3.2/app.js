let mainContainer = document.getElementById('main');

//create a button Start
let startButton = document.createElement('button');
mainContainer.appendChild(startButton);
startButton.innerHTML = "START";
startButton.style.margin = '20px'
startButton.style.padding = "20px";
startButton.style.color = "white";
startButton.style.backgroundColor = "green"


//Create STOP button
let stopButton = document.createElement('button');
mainContainer.appendChild(stopButton);
stopButton.innerHTML = "STOP";
stopButton.style.padding = "20px";
stopButton.style.color = "white";
stopButton.style.backgroundColor = "darkred"



//Create Div for time container
let currentTime = document.createElement('div');
mainContainer.appendChild(currentTime);



currentTime.style.fontSize = '48px';
currentTime.style.padding = "20px"

const startTime = () => {
    const now = new Date();

    var time = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();

    currentTime.innerHTML = time;

    let setTime = setInterval(startTime, 500);

    stopButton.addEventListener('click', () => {
        clearInterval(setTime)
    })

}

startButton.addEventListener('click', startTime);