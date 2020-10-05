//BODY QUERY + CSS
let body = document.querySelector('body');
body.style.backgroundColor = 'lightgrey'; //TO REMOVE
body.style.display = 'flex';
body.style.justifyContent = 'center';

//MAIN QUERY + CSS
let main = document.querySelector('.main');
//console.log(main1);

main.style.display = 'flex';
main.style.flexWrap = 'wrap';
main.style.justifyContent = 'center';
main.style.alignContent = 'center';
main.style.width = '1200px';


//Create 20 buttons
for (let i = 0; i < 20; i++) {
    let button = document.createElement('input');
    button.type = 'button';
    button.value = [i+1];
    document.querySelector('.main').appendChild(button);

    //CSS
    button.style.width = '150px';
    button.style.height = '150px';
    button.style.margin = '4px';
    button.style.backgroundColor = 'darkred';
    button.style.border = '0';

    button.style.color = 'white';
    button.style.fontWeight = 'bold';
    button.style.fontSize = '1.4em';

    // Color Change

    let isGreen = false;

    // if (isGreen = false) {
    // function changeToGreen () {
    //     button.style.backgroundColor = 'darkgreen';
    //     }
    // }

    function changeToGreen () {
        button.style.backgroundColor = 'darkgreen';
        }

    button.addEventListener('click', changeToGreen);

}



console.log(body);
console.log(main);