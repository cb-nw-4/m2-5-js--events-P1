let body = document.querySelector("body");
let main = document.querySelector("#main");
let dots = 20;

main.style.marginLeft = 15+"%";
main.style.marginRight = 15+"%";
main.style.textAlign = "center";

buttons();

function buttons() {
    for (let count = 0; count <= dots; count++) {
        let btn = document.createElement("button");
        btn.innerText = count;
        btn.setAttribute("class", "buttons")
        main.appendChild(btn);
        btn.style.textAlign = "center";
        btn.style.backgroundColor = "#800020";
        btn.style.color = "white";
        btn.style.height = 100+"px";
        btn.style.width = 100+"px";
        btn.style.borderStyle = "none";
        btn.style.margin = 2+"px";
        btn.style.fontSize = 20+"px";
        btn.style.fontWeight = "bold";
        btn.addEventListener("click", function() {
            btn.style.backgroundColor = "green";
        })
    }
}