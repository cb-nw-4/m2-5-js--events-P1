
const main = document.getElementById("main");

main.style.textAlign = "center";

const form = document.createElement("form");
main.appendChild(form);

let button;
for(let i =0; i<20;i++){

    button = document.createElement("button");
    button.type ="button";
    button.innerText = `${i+1}`;
    button.style.height = "100px";
    button.style.width = "100px";
    button.style.backgroundColor = "darkred";
    button.style.color = "white";
    button.style.fontSize = "3rem";
    button.style.border ="1px solid white";
    form.appendChild(button);
}

form.addEventListener("click",function(){
    if(event.target != form){
        if(event.target.style.backgroundColor == "darkred"){
            event.target.style.backgroundColor = "darkgreen";
        }else{
            event.target.style.backgroundColor = "darkred";
        }
    }
});
