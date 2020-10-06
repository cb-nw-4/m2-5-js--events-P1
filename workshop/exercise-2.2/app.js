const container = document.querySelector('.main');
const subContainer1 = document.createElement('div');
const subContainer2 = document.createElement('div');
const subContainer3 = document.createElement('div');
container.appendChild(subContainer1);
container.appendChild(subContainer2);
container.appendChild(subContainer3);

const NUMBERS = 20;
for (let count = 0; count < NUMBERS; count++) {
    const btn = document.createElement('button');
    btn.innerText = count;
    btn.style.height = '100px';
    btn.style.width = '100px';
    btn.style.margin = '1px';
    btn.style.border = 'none';
    btn.style.backgroundColor = '#990000';
    btn.style.color = 'white';
    btn.style.fontSize = '40px';
    if (count <= 7 ) {
        subContainer1.appendChild(btn);
    }
    else if (count <= 14 ) {
        subContainer2.appendChild(btn);
    }
    else {
        subContainer3.appendChild(btn);
    }
}

container.style.display = 'flex';
container.style.flexDirection = 'column';
container.style.alignItems = 'center';

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
