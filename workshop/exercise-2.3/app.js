console.log('exercise 2.3');


const main = document.querySelector('.main'); 
const body = document.querySelector('body'); 
main.style.width="100%";
main.style.height="100%";
main.style.margin="10px auto";
main.style.position="relative";

for( let i = 1; i<=20; i++) {
    const button = document.createElement('button'); 
    button.setAttribute("id","button"+i); 
    button.innerText=(i);
    main.appendChild(button);
    button.style.height="60px";
    button.style.width="60px";
    button.style.margin= "0.5px";
    button.style.color="white"; 
    button.style.backgroundColor="#8b0000";
    button.style.border="none";
    button.style.borderRadius="50%";
    button.style.fontSize ="1.2em";
    button.style.fontWeight ="bold";
    button.style.position="absolute"; 
    button.style.top= Math.floor(Math.random() * 100)+"%"; 
    button.style.left= Math.floor(Math.random() * 100)+"%"; 
    button.addEventListener('click',handleButtonClick);
    button.setAttribute("class","red");
}; 

function handleButtonClick (event) { 
    if(event.currentTarget.className === "red") { 
        event.currentTarget.style.backgroundColor="#006400";
        event.currentTarget.setAttribute("class","green");
    } else { 
        event.currentTarget.style.backgroundColor="#8b0000";
        event.currentTarget.setAttribute("class","red");
    };
}; 

