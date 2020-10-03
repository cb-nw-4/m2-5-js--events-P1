// Exercise 1.2
// ------------

//FUNCTIONS
let playerWin = true;

let timeVar = setTimeout(function() {
    playerWin = false;

    body.innerText = 'You Lose!';

    //CSS
    body.style.paddingTop = '40vh';
    body.style.paddingRight = '10vw'
    body.style.color = 'grey';
    body.style.textAlign = 'right';
    body.style.fontSize = '5em';
    body.style.fontWeight = 'bold';
}, 5000);

function winFunction() {
    if (playerWin = true) {
        body.innerText = 'You Win!';

        //CSS
        body.style.paddingTop = '40vh';
        body.style.paddingRight = '10vw'
        body.style.color = 'grey';
        body.style.textAlign = 'right';
        body.style.fontSize = '5em';
        body.style.fontWeight = 'bold';
        clearTimeout(timeoutVar);
    }
}



//QUERY SELECTING


let span = document.querySelector('span');
span.innerText = '5';

let body = document.querySelector('body');
body.addEventListener('click', winFunction);


//BODY CSS
body.style.height = '100vh';

body.style.backgroundColor = 'lightyellow';

body.style.fontSize = '3em';
body.style.color = 'lightpink';


console.log('exercise 1.2');
