const body = document.querySelector("body");
const main = document.querySelector(".main");
// const newButton = document.createElement('button')
let arr = [];

for (let i = 1; i < 21; i++) {
  arr.push(false)
  const button = document.createElement('button')
  button.innerText = i
  main.appendChild(button)
  
  
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
}

// let listOfButtons = document.querySelectorAll('button')

