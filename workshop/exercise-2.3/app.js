const container = document.querySelector('.main');

const NUMBERS = 20;
for (let count = 0; count < NUMBERS; count++) {
    const btn = document.createElement('button');
    btn.innerText = count;
    container.appendChild(btn);
    btn.style.height = '80px';
    btn.style.width = '80px';
    btn.style.border = 'none';
    btn.style.backgroundColor = '#990000';
    btn.style.color = 'white';
    btn.style.fontSize = '30px';
    btn.style.borderRadius = '50%';
    btn.style.position = 'absolute';
    btn.style.top = Math.floor((Math.random() * 90) + 1) + "vh";
    btn.style.left = Math.floor((Math.random() * 90) + 1) + "vw";
}


const allButtons = document.querySelectorAll('button');
for (let i = 0; i < allButtons.length; i++) {
    allButtons[i].addEventListener('click', function() {
        const curColor = allButtons[i].style.backgroundColor;
        if (curColor === 'rgb(153, 0, 0)') {
            allButtons[i].style.backgroundColor = 'rgb(0, 77, 0)';
        }
        else {
            allButtons[i].style.backgroundColor = 'rgb(153, 0, 0)';
        }
    })
};
