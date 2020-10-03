// Exercise 1.1
const para = document.querySelector('.result');
const container = document.querySelector('body');
container.addEventListener('click', handleClick);

function handleClick() {
    para.innerText = 'You Win!';
    para.style.color = 'red'; //not required by the exercise
    para.style.fontSize = '50px'; //not required by the exercise
};

console.log('exercise 1.1');
