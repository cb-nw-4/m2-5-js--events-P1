const div = document.querySelector('.main');

// generate buttons
for (let i = 1; i <= 20; i++) {
    const button = document.createElement('button');
    button.style.height = '100px';
    button.style.width = '100px';
    button.style.backgroundColor = 'darkred';
    button.style.border = 'none';
    button.style.margin = '1px';
    button.style.fontSize = '2rem';
    button.style.fontWeight = 'bold';
    button.style.color = 'white';
    button.innerText = i;
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