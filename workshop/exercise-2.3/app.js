// create 20 buttons
// style the buttons
// create a random generator to move the top: and left: properties of each one on each refresh


const main = document.querySelector('.main')

for (let i = 0; i < 20; i++){
  main.appendChild(document.createElement('button'))
}

const getButton = document.querySelectorAll('button')
let arr = []


getButton.forEach((button, i) => {
  arr[i] = false
  button.innerText = i + 1
  button.style.position = 'absolute'
  button.style.top = Math.ceil(Math.random() * 80) + '%'
  button.style.left = Math.ceil(Math.random() * 80) + '%'
  // button
  button.addEventListener('click', function() {
    if (arr[i] === false){
      button.style.backgroundColor = 'green'
      arr[i] = true
    }
    else {
      button.style.backgroundColor = 'crimson'
      arr[i] = false
    }
  })
})