
let ul = document.createElement("ul");
ul.setAttribute("class","ul");
document.body.appendChild(ul);
let click = 0;

for(i=0;i<20;i++){
let li = document.createElement("li");
li.setAttribute("class","button");
let lip = document.createElement("p");
lip.innerHTML = i+1;
lip.setAttribute("class","button-text");
li.appendChild(lip);
document.querySelector("ul").appendChild(li);
}

let newArr = document.querySelectorAll("li");
newArr.forEach((element,i) => element.addEventListener("click", () => 
    { if (click === 0) 
        {
        newArr[i].style.backgroundColor = "green";
        click = 1;
        }
    else {(newArr[i].style.backgroundColor = "darkred");
        click = 0;
 }

    }
   ));
