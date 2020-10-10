let ul = document.createElement("ul");
ul.setAttribute("class", "ul");
document.body.appendChild(ul);

for (i=0;i<20;i++){
let li = document.createElement("li");
let lip = document.createElement("p");
lip.innerHTML = i+1;
lip.setAttribute("class", "button-text");
li.appendChild(lip);
li.setAttribute("class", "button"); 
document.querySelector("ul").appendChild(li);
};

let clicked = document.querySelectorAll("li");
clicked.forEach((element,i) => element.addEventListener("click", () => {
    clicked[i].style.backgroundColor = "darkgreen"}
));

function darkgreen(){
    document.querySelector("button").style.backgroundColor = "darkgreen";
    clicks[5].style.backgroundColor = "darkgreen";
}