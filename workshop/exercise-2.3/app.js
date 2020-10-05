const main = document.getElementById("main");

let button;
for(let i =0; i<20;i++){

    button = document.createElement("button");
    button.type ="button";
    button.innerText = `${i+1}`;

    button.style.position = "absolute";
    button.style.left = `${getRandPosition()}vw`;
    button.style.top = `${getRandPosition()}vh`;
    button.style.backgroundColor = "darkred";

    main.appendChild(button);

    button.addEventListener("click",function(){
            if(event.target.style.backgroundColor == "darkred"){
                event.target.style.backgroundColor = "darkgreen";
            }else{
                event.target.style.backgroundColor = "darkred";
            }

    });
}

function getRandPosition (){
    let num = Math.floor(Math.random()*Math.floor(85)+5);
    return num;
}