const div = document.querySelector('.main');

// generate buttons
for (let i = 1; i <= 20; i++) {
    let fromTop = Math.floor((Math.random() * 85));
    let fromLeft = Math.floor((Math.random() * 90));
    const button = document.createElement('button');
    button.style.height = '50px';
    button.style.width = '50px';
    button.style.backgroundColor = 'darkred';
    button.style.border = 'none';
    button.style.borderRadius = '50%';
    button.style.fontSize = '2rem';
    button.style.fontWeight = 'bold';
    button.style.color = 'white';
    button.innerText = i;
    button.style.position = 'absolute';
    button.style.top = `${fromTop}%`;
    button.style.left = `${fromLeft}%`;
    div.appendChild(button);
}

// toggle button colour when clicked.
function handleButtonClick(event) {
    if (event.target.nodeName === 'BUTTON') {
        if (event.target.style.backgroundColor === 'darkred') {
            event.target.style.backgroundColor = 'darkgreen';
        } else {
            event.target.style.backgroundColor = 'darkred';
        }
    }
}

div.addEventListener('click', handleButtonClick);