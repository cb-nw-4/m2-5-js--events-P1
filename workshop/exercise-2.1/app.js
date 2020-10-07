const main = document.getElementById("main");

main.style.textAlign = "center";
main.style.marginLeft = "100px";
main.style.marginRight = "100px";
main.style.marginTop = "10px";

let form = document.createElement("form");
main.appendChild(form);


let button;
for(let i = 1; i<=20 ; i++){
    button = document.createElement("button");
    button.type = "button";
    button.innerText = `${i}`;
    form.appendChild(button);

    button.style.fontSize = "3rem";
    button.style.fontWeight = "bold";
    button.style.color = "white";
    button.style.backgroundColor = "darkred";
    button.style.height = "150px";
    button.style.width = "150px";
    button.style.margin = "1px";
    button.style.border = 0;
}


form.addEventListener("click",function(){
    if(event.target != form){
        event.target.style.backgroundColor = "darkgreen";
    }
});
