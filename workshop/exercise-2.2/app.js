const main = document.querySelector(".main")
const body = document.querySelector("body")

for (let i = 1; i < 21; i++) {
    let button = document.createElement("button")
    button.setAttribute("id", "button"+i)
    button.innerText = (i)
    main.appendChild(button)

    button.style.width = "100px";
    button.style.height = "100px";
    button.style.padding = "5px";
    button.style.margin = "2px";
    button.style.borderRadius = "5px";
    button.style.color = "white";
    button.style.fontSize = "30px";
    button.style.backgroundColor = "darkred";
    button.setAttribute("class","red");
    button.addEventListener("click", clickButton)
    // main.appendChild(document.createElement("button")).innerText = `${i}`
}

function clickButton(event){
    if (event.currentTarget.className === "red"){
        event.currentTarget.style.backgroundColor = "darkgreen";
        event.currentTarget.setAttribute("class", "green");
    } else {
        event.currentTarget.style.backgroundColor = "darkred";
        event.currentTarget.setAttribute("class", "red");
    }
}



// const redButton = document.querySelectorAll("button")
// redButton.forEach(button => {
//     button.addEventListener('click' , () => {
//         if 
//         button.style = 'background-color: darkgreen'
//     })
// })