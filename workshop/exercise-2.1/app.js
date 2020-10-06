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

let clicks = document.querySelectorAll("li");
clicks.forEach((element,i) => element.addEventListener("click", () => {
    clicks[i].style.backgroundColor = "green"}
));

// function green(){
//     //document.querySelector("button").style.backgroundColor = "green";
//     clicks[5].style.backgroundColor = "green";
// }