//BODY QUERY + CSS
let body = document.querySelector('body');
body.style.backgroundColor = 'lightgrey'; //TO REMOVE
body.style.justifyContent = 'center';

//MAIN QUERY + CSS
let main = document.querySelector('.main');
//console.log(main1);

main.style.width = '100vw';
main.style.height = '100vh';


//Create 20 buttons
for (let i = 0; i < 20; i++) {
    let button = document.createElement('input');
    button.type = 'button';
    button.value = [i+1];
    document.querySelector('.main').appendChild(button);

    //CSS
    button.style.width = '90px';
    button.style.height = '90px';
    button.style.border = '0';
    button.style.borderRadius = '50%';
    button.style.backgroundColor = 'darkred';

    button.style.color = 'white';
    button.style.fontWeight = 'bold';
    button.style.fontSize = '1.4em';

    //CSS POSITION;
    let randomNumberTop = Math.floor(Math.random()*700) + 100;
    let randomNumberLeft = Math.floor(Math.random()*1700) + 10;

    button.style.position = 'absolute';
    button.style.top = `${randomNumberTop}px`;
    button.style.left = `${randomNumberLeft}px`;

    function changeToGreen () {
        button.style.backgroundColor = 'darkgreen';
    }

    button.addEventListener('click', changeToGreen);
}

console.log(main);