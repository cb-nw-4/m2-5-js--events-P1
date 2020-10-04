
let main = document.querySelector(".main");

for(let i=0; i< 20; i++) {
    let myButton = document.createElement("button");
    myButton.innerText = i + 1;
    const randomLeft = Math.floor(Math.random() * 90);
    myButton.style.left = `${randomLeft}vw`;
    const randomTop = Math.floor(Math.random() * 90);
    myButton.style.top = `${randomTop}vh`;
    main.appendChild(myButton);
    myButton.addEventListener("click", function(){
        myButton.classList.toggle("button-clicked");
    });
}