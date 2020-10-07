// Exercise 1.1
// ------------
console.log('exercise 1.1');

let userWins = true;
setTimeout(function(){userWins = false;},1000);

document.body.addEventListener("click", function(){
    if(userWins){
        document.getElementById("result").innerHTML = "You Win!";
    } else{
        document.getElementById("result").innerHTML = "You Loose!";
    }
});

const body = document.querySelector("body");
body.style.backgroundImage = "radial-gradient(black,blue)";
body.style.height = "100vh";
body.style.width = "100vw";
body.style.margin = 0;
body.style.display = "relative";
body.style.color = "white";
body.style.fontSize = "2rem";
body.style.fontFamily = "arial";

let para = document.createElement("p");
body.appendChild(para);
para.innerHTML = "Be a quicker clicker! &#9201;";
para.style.margin=0;
para.style.paddingLeft="20px";
para.style.paddingTop="20px";

para = document.getElementById("result");
para.style.margin = 0;
para.style.position = "absolute";
para.style.width = "100%";
para.style.bottom = "30vh";
para.style.textAlign = "center";
para.style.fontSize = "10rem";
para.style.color = "fuchsia";





