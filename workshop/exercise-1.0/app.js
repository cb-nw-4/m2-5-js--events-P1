// Exercise 1.0
const div = document.querySelector('.main');
const container = document.querySelector('body');
container.addEventListener('click', handleClick);

function handleClick() {
    div.innerText = 'You Win!';
    div.style.color = 'red'; //not required by the exercise
    div.style.fontSize = '50px'; //not required by the exercise
};
console.log('exercise-1');
