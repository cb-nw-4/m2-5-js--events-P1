let clickCounter = 0
for (i=0; i<=20; i++){
    let redButton = document.createElement('button')
let mainSelector = document.getElementById("main")
redButton.innerHTML = i
mainSelector.appendChild(redButton)
redButton.style.backgroundColor = "red"
redButton.style.padding = "20px"
redButton.style.borderRadius = "100px"
redButton.style.position = "relative"
redButton.style.left = "100px"
function numberRandomizer(){
    var x = Math.floor((Math.random() * 250) + 50); //random number between 50 and 300
    return x;
  }
  
  redButton.style.top = numberRandomizer() + 'px';
  redButton.style.left = numberRandomizer() + 'px';
redButton.addEventListener("click", function(){
    clickCounter++
    if(clickCounter % 2 == 0){
        redButton.style.backgroundColor = "red"
    }else{
        redButton.style.backgroundColor = "green"

    }
})
}


