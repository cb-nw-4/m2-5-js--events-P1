let clickCounter = 0

for (i=0; i<20; i++){
    let redButton = document.createElement('button')
    redButton.innerHTML = i
    let mainSelector = document.getElementById("main")
    mainSelector.appendChild(redButton)
    redButton.style.backgroundColor ="red"
    redButton.style.padding = "30px"
    redButton.addEventListener("click", function(){
        clickCounter++
        if(clickCounter % 2 == 0){
            redButton.style.backgroundColor = "green"
        }else{
            redButton.style.backgroundColor = "red"

        }
    })
    
}



