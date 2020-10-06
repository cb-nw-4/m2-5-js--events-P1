console.log('exercise 2.1');

const main = document.querySelector('.main'); 
const body = document.querySelector('body'); 
main.style.width="80%";
main.style.height="55%";
main.style.margin="10px auto";
main.style.display="flex";
main.style.alignItems ="flex-start";
main.style.justifyContent ="center";
main.style.flexWrap ="wrap";


for( let i = 1; i<=20; i++) {
    const button = document.createElement('button'); 
    button.setAttribute("class","button"+i); 
    button.innerText=(i);
    main.appendChild(button);
    button.style.height="32.5%";
    button.style.width="14%";
    button.style.margin= "0.5px";
    button.style.color="white"; 
    button.style.backgroundColor="#8b0000";
    button.style.border="none";
    button.style.display="inline-block";
    button.style.fontSize ="1.5em";
    button.style.fontWeight ="bold";
    button.addEventListener('click',handleButtonClick)
}; 

function handleButtonClick (event) { 
    console.log(event.currentTarget);
    event.currentTarget.style.backgroundColor="#006400";
}; 

