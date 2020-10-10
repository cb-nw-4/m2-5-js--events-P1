let body = document.querySelector("body");
let main = document.querySelector("div");

function createDots() {
    for (let i = 0; i < 21; i++) {
        let dots = document.createElement("button");
        dots.setAttribute("class", "dots");
        main.appendChild(dots);
        dots.innerText = i;
        dots.style.color = "#fff";
        dots.style.fontSize = 24+"px";
        dots.style.height = 50+"px";
        dots.style.width = 50+"px";
        dots.style.borderRadius = 100+"%";
        dots.style.backgroundColor = "#800020"; 
        dots.style.borderStyle = "none";
        dots.style.position = "absolute";
        dots.style.left = Math.random() * 90+"vw";
        dots.style.top = Math.random() * 90+"vh";
        dots.addEventListener("click", function() {
            dots.style.backgroundColor = "green";
        })
    }
}
createDots();

