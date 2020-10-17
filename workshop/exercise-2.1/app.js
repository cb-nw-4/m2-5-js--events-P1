let userClick = false
for (i = 1; i<=20; i++){
        let redButtons = document.createElement('button')
        redButtons.innerHTML = i
        let selector = document.getElementById("main")
        redButtons.style.backgroundColor = "red"
        redButtons.style.padding = "50px"
        selector.appendChild(redButtons)
        redButtons.addEventListener("click", function(){

                redButtons.style.backgroundColor = 'green'
            
        })
    }





console.log(redButtons)