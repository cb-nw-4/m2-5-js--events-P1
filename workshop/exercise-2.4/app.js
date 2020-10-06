const body = document.querySelector('body');
const startButton = document.querySelector('.start-button');
const header = document.querySelector('.header');
const board = document.querySelector('.board');
let cellList = [];

// animate pieces when clicked
function handleButtonClick(event) {
    if (event.target.nodeName === 'BUTTON' && event.target.style.backgroundColor === 'darkred') {
        event.target.classList.add('button-transition');
        cellList.pop();
    }
}

function gameOver (message) {
    result = document.createElement('div');
    result.style.width = '100%';
    result.style.textAlign = 'center';
    result.style.position = 'absolute';
    result.style.top = '50%'
    result.style.transform = 'translateY(-50%)';
    result.style.fontFamily = 'Indie Flower';
    result.style.fontSize = '12rem';
    result.style.fontWeight = 'bold';
    result.style.color = 'blue';
    result.style.textShadow = '2px 2px 5px black';
    result.innerText = message;
    body.appendChild(result);
}
function clickStart () {
    startButton.removeEventListener('transitionend', clickStart);
    startButton.removeEventListener('click', clickStart);
    let countDown = 5;
    header.innerText = countDown;

    // create 13x13 board grid.
    for (let i = 1; i <= 169; i++) {
        cell = document.createElement('div');
        cell.className = 'cell-' + i;
        cell.style.height = '40px';
        cell.style.width = '40px';
        board.appendChild(cell);
    }

    // generate a random number of buttons with unique grid locations
    let numButtons = Math.floor((Math.random() * 10) + 1);
    
    while (cellList.length < numButtons) {
        let cellNum = Math.floor((Math.random() * 169) + 1);

        if (!cellList.includes(cellNum)) {
            cellList.push(cellNum);
        }
    }

    // populate grid with buttons
    for (let i = 1; i <= numButtons; i++) {
        const cell = document.querySelector('.cell-' + cellList[i - 1]);
        const button = document.createElement('button');
        button.style.height = '40px';
        button.style.width = '40px';
        button.style.backgroundColor = 'darkred';
        button.style.border = 'none';
        button.style.borderRadius = '50%';
        button.style.outline = 'none';
        button.style.fontFamily = 'Fredoka One, cursive';
        button.style.fontSize = '1.5rem';
        button.style.color = 'yellow';
        button.innerText = i;
        cell.appendChild(button);
    }

    // listen for button clicks
    board.addEventListener('click', handleButtonClick);

    // start the count down timer
    const timer = setInterval(function() {
        countDown--;
        header.innerText = countDown;

        if (cellList.length === 0) {
            clearInterval(timer);
            gameOver('You Won!');
        }

        if (countDown === 0) {
            board.removeEventListener('click', handleButtonClick);
            clearInterval(timer);
            header.innerText = countDown;

            if (cellList.length > 0) {
                gameOver('You Lost!');
            }
        }
    }, 1000);
}

// listen for start button click and wait for opacity transition
// to complete
startButton.addEventListener('click', function() {
    startButton.classList.add('start-button-active');
    startButton.addEventListener('transitionend', clickStart)
});