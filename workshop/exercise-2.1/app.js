const main = document.querySelector(".main")
const body = document.querySelector("body")

for (let i = 1; i < 21; i++) {
    main.appendChild(document.createElement("button")).innerText = `${i}`
}

const redButton = document.querySelectorAll("button")
redButton.forEach(button => {
    button.addEventListener('click' , () => {
        button.style = 'background-color: darkgreen'
    })
})