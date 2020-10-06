document.querySelector("div").appendChild(document.createElement("ul"));
let click = 0;

for(i=0;i<20;i++) {
let li = document.createElement("li");
document.querySelector("ul").appendChild(li);
li.setAttribute("class","button");
let lip = document.createElement("p");
lip.innerHTML = i;
lip.setAttribute("class","button-text");
li.appendChild(lip);
}

let newArr = document.querySelectorAll("li");
newArr.forEach((element,i) => {
    newArr[i].style.position = "absolute";
    newArr[i].style.left = (Math.floor(Math.random() * 100))+"%";
    newArr[i].style.top = (Math.floor(Math.random() * 100))+"%";
});

newArr.forEach((element,i) => element.addEventListener("click", () => {
    if (click === 0){
    newArr[i].style.backgroundColor = "green";
    click = 1;
    }
    else {
    newArr[i].style.backgroundColor = "darkred";
    click = 0;
    }

}));



