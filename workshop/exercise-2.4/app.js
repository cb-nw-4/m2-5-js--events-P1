const container = document.querySelector('.main');

const countdownArea = document.createElement('div');
countdownArea.style.height = '120px';
countdownArea.style.backgroundColor = 'rgb(102, 102, 102)';
countdownArea.style.display = 'flex';
countdownArea.style.justifyContent = 'center';
countdownArea.style.alignItems = 'center';
container.appendChild(countdownArea);

const startButton = document.createElement('button');
startButton.innerText = 'Start';
startButton.style.backgroundColor = 'rgb(255, 191, 0)';
startButton.style.border = 'none';
startButton.style.height = '70px';
startButton.style.width = '180px';
startButton.style.color = 'rgb(102, 102, 102)';
startButton.style.fontSize = '30px';
countdownArea.appendChild(startButton);

const subContainer = document.createElement('div');
container.appendChild(subContainer);
subContainer.style.display = 'flex';
subContainer.style.justifyContent = 'center';

const gameArea = document.createElement('div');
gameArea.style.height = '600px';
gameArea.style.width = '70%';
gameArea.style.backgroundColor = 'rgb(230, 230, 230)';
gameArea.style.marginTop = '100px';
gameArea.style.position = 'relative';
gameArea.style.display = 'flex';
gameArea.style.justifyContent = 'center';
gameArea.style.alignItems = 'center';
subContainer.appendChild(gameArea);

startButton.addEventListener('mouseover', makeButtonBigger);
function makeButtonBigger() {
startButton.style.transition = 'all .2s ease-in-out';
startButton.style.transform = 'scale(1.2)';
startButton.style.borderRadius = '4px';
startButton.style.border = '2px solid rgb(255, 191, 0)';
startButton.style.color = 'rgb(255, 191, 0)';
startButton.style.backgroundColor = 'rgb(102, 102, 102)';
};

startButton.addEventListener('click', eventHandler);

function eventHandler() {
    startButton.style.display = 'none';
    
    const NUMBERS = Math.floor((Math.random() * 10) + 1);
    for (let count = 1; count <= NUMBERS; count++) {
        const btn = document.createElement('button');
        btn.setAttribute('class', 'buttons');
        btn.innerText = count;
        gameArea.appendChild(btn);
        btn.style.height = '80px';
        btn.style.width = '80px';
        btn.style.border = 'none';
        btn.style.backgroundColor = '#990000';
        btn.style.color = 'white';
        btn.style.fontSize = '30px';
        btn.style.borderRadius = '50%';
        btn.style.position = 'absolute';
        btn.style.top = Math.floor((Math.random() * 85) + 1) + "%";
        btn.style.left = Math.floor((Math.random() * 80) + 1) + "%";
        function changeColor() {
            btn.style.backgroundColor = 'rgb(0, 77, 0)';
        }
        btn.addEventListener('click', changeColor);
        setTimeout(function() {
            btn.removeEventListener('click', changeColor);
        }, 5000)
    }
    
    let total = 5;
    countdownArea.innerText = total;
    countdownArea.style.color = 'white';
    countdownArea.style.fontSize = '60px';
    countdownArea.style.fontFamily = "'Roboto', sans-serif"; 

    const countdown = setInterval(() => {
        total = total - 1;
        countdownArea.innerText = total;
        countdownArea.style.color = 'white';
        countdownArea.style.fontSize = '60px'; 
        countdownArea.style.fontFamily = "'Roboto', sans-serif"; 
        if (total <= 0) {
        clearInterval(countdown);
        }
    }, 1000); 

    const checkIfWin =setInterval(() => {
        const buttons = document.querySelectorAll('.buttons');
        let allGreen = Array.from(buttons).every(button => {return button.style.backgroundColor === 'rgb(0, 77, 0)'});    
        if (allGreen === true && total > 0) {
            const winResult = document.createElement('p');
            winResult.innerText = 'You Win!!!!';
            winResult.style.height = '300px';
            winResult.style.width = '300px';
            winResult.style.backgroundColor = 'green';
            winResult.style.color = 'white';
            winResult.style.position = 'absolute';
            winResult.style.fontSize = '50px';
            winResult.style.textAlign = 'center';
            winResult.style.lineHeight = '300px';
            winResult.style.fontFamily = "'Roboto', sans-serif"; 
            winResult.style.borderRadius = '15px'; 
            winResult.style.boxShadow = '10px 10px 8px #a8a8a8';
            gameArea.appendChild(winResult);
            clearInterval(checkIfWin);
            }
        else if (allGreen !== true && total === 0) {
            const loseResult = document.createElement('p');
            loseResult.innerText = 'You Lose...';
            loseResult.style.height = '300px';
            loseResult.style.width = '300px';
            loseResult.style.backgroundColor = 'red';
            loseResult.style.color = 'white';
            loseResult.style.position = 'absolute';
            loseResult.style.fontSize = '50px';
            loseResult.style.textAlign = 'center';
            loseResult.style.lineHeight = '300px';
            loseResult.style.fontFamily = "'Roboto', sans-serif"; 
            loseResult.style.borderRadius = '15px'; 
            loseResult.style.boxShadow = '10px 10px 8px #a8a8a8';
            gameArea.appendChild(loseResult);
            clearInterval(checkIfWin);
        }
    }, 1000);
};

