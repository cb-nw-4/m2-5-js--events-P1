
let main = document.querySelector(".main");
let count = 0;

for(let i = 1; i <= 3; i++){
    let myDiv = document.createElement("div");
    main.appendChild(myDiv);
    for(let j = 1 ; j <= 7 && i*j < 21; j++){       
        let buttons = document.createElement("button");
        buttons.innerText = ++count;
        myDiv.appendChild(buttons);
        buttons.addEventListener("click", function(event) {            
            buttons.classList.toggle("button-clicked");
        });
    }
}
