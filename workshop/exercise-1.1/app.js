// Exercise 1.1
// ------------

let playerWin = true;

let timeoutVar = setTimeout(function() {
    playerWin = false;
    body.innerText = 'You Lose!';

    //CSS
    body.style.paddingTop = '50vh';
    body.style.textAlign = 'center';
    body.style.color = 'pink';
    body.style.fontSize = '8em';
    body.style.fontWeight = 'bold'
    
    
}, 1000);




function clickFast() {
    if (playerWin = true) {
        body.innerText = 'You Win!';

        //CSS
        body.style.paddingTop = '50vh';
        body.style.textAlign = 'center';
        body.style.color = 'pink';
        body.style.fontSize = '8em';
        body.style.fontWeight = 'bold'
        clearTimeout(timeoutVar);

    }
}
// let span = document.createElement('span');
// document.querySelector('body').appendChild(span);
// span.addEventListener('click', clickFast);

let body = document.querySelector('body');
body.innerText = 'Be a quicker clicker!'
body.addEventListener('click', clickFast);
console.log('exercise 1.1');

//BODY CSS
body.style.backgroundColor = 'lightblue'

body.style.color = 'white';
body.style.fontSize = '3em';
body.style.fontWeight = 'bold'

body.style.height = '100vh';
