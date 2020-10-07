// Exercise 1.0
// ------------
console.log('exercise-1');

const getBody = document.querySelector('body')

getBody.addEventListener('click', () => {
  getBody.innerText = 'You win!'
})

