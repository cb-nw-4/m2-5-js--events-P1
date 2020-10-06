let ul = document.createElement("ul");
let main = document.querySelector("div");
main.appendChild(ul);
let time = 10;
let gameFin = 0;
let score = [];
let tp = document.createElement("p");
tp.innerHTML = `You have ${time} seconds left!`;
tp.setAttribute("class","message");
main.appendChild(tp);

let btn = document.createElement("button");
btn.setAttribute("class","strbtn");
btn.innerHTML = "START";
main.appendChild(btn);

function initgame() {
    document.querySelector("button").style.display = "none";
    document.querySelector("ul").style.display = "flex";
    document.querySelector("p").style.display = "block";
    document.querySelector("p").style.position = "absolute";

    timer = setInterval(() => { 
        time=time-1;
        tp.innerHTML = `You have ${time} seconds left!`;
        if (time === 0){
            clearInterval(timer);
            tp.innerHTML = `You ran out of time! Try again!`;
            tp.className = "message-loser";
            gameFin = 1;
            }
        if (score.reduce(scoreTot, 0) === rand) {
            clearInterval(timer);
            tp.innerHTML = `You WIN!`;
            tp.className = "message-winner";
            gameFin = 1;
            }
        
        function scoreTot(total, num) {
            return total + num;
        }
       
     }, 1000);
    let rand=Math.floor(Math.random() * 20)+1;    
    for(i=0;i<rand;i++){
        let li = document.createElement("li");
        li.setAttribute("class","button");
        document.querySelector("ul").appendChild(li);
        let lip = document.createElement("p");
        lip.innerHTML=i+1;
        lip.setAttribute("class","button-text");
        li.appendChild(lip);
        li.style.position="absolute";
        score.push(0);
    }


    let newArr = document.querySelectorAll("li");
    newArr.forEach((element,i) => {
        element.style.left=Math.floor(Math.random() * 90)+"%";
        element.style.top=Math.floor(Math.random() * 90)+10+"%";
    })

    newArr.forEach((element,i) => {element.addEventListener("click", function redGreen() 
     {
        if (gameFin === 0){
        if (score[i]===0){
             element.style.backgroundColor = "green";
             score[i] = 1;
             console.log(score);
         }
         else if (score[i]===1)
        {
             element.style.backgroundColor = "darkred";
             score[i] = 0;
             console.log(score);
         }
        } 
     })});

}

document.querySelector("button").addEventListener("click", initgame);

