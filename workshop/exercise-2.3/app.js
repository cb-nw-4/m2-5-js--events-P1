const body = document.querySelector("body")
const main = document.querySelector(".main")

for( let i = 1; i < 21; i++) {
    const button = document.createElement('button'); 
    button.setAttribute("id","button"+ i); 
    button.innerText = (i);
    main.appendChild(button);

    button.style.position="absolute"; 
    button.style.height="60px";
    button.style.width="60px";
    button.style.margin= "5px";
    button.style.backgroundColor="darkred";
    button.style.color="white"; 
    button.style.border="none";
    button.style.borderRadius="50%";
    button.style.fontSize ="30px";
    button.style.top= Math.floor(Math.random() * 100)+"%"; 
    button.style.left= Math.floor(Math.random() * 100)+"%"; 
    button.addEventListener('click',clickButton);
    button.setAttribute("class","red");
}; 

function clickButton(event){
    if (event.currentTarget.className === "red"){
        event.currentTarget.style.backgroundColor = "darkgreen";
        event.currentTarget.setAttribute("class", "green");
    } else {
        event.currentTarget.style.backgroundColor = "darkred";
        event.currentTarget.setAttribute("class", "red");
    }
}
