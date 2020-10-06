console.log('exercise 2.3')

let mainContainer = document.getElementById('main');




//Create 20 buttons

let flags = [];


const randomPosition = () => {
    return Math.floor(Math.random() * 10);
};


for (let i = 0; i < 20; i++) {
    let button = document.createElement('button');
    button.innerHTML = i + 1;
    button.id = i + 1;
    mainContainer.appendChild(button);

    //Styling buttons 
    button.style.borderRadius = "50%";
    button.style.padding = "10px";
    button.style.backgroundColor = '#B22222';
    button.style.color = 'white';
    button.style.fontSize = '36px';
    button.style.width = "80px"
    button.style.position = 'absolute';


    //declare flags array
    flags.push(false);
}

let ww = window.innerWidth;
let wh = window.innerHeight;

let buttons = document.querySelectorAll('button');

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
        let leftRandomPositon = Math.floor(Math.random() * ww);
        let topRandomPositon = Math.floor(Math.random() * wh);

        button.style.left = `${leftRandomPositon}px`;
        button.style.top = `${topRandomPositon}px`;
    })

}

window.setInterval(move(), 1000)