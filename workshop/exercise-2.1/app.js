const body = document.querySelector('body')
const main = document.querySelector('.main')
// const newButton = document.createElement('button')


for (let i = 1; i < 21; i++) {
  main.appendChild(document.createElement('button')).innerText = `${i}`
}

const getButton = document.querySelectorAll('button')
console.log(getButton)

getButton.forEach(button => {
  button.addEventListener('click', () => {
    button.style = 'background-color : green'
  })
  console.log(button)
})



