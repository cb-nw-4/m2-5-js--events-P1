//clock

let area= document.querySelector(".main");
area.style.position="flex";
area.style.justifyContent="center";

let dateArea=document.createElement('p');
area.appendChild(dateArea);
dateArea.innerText=new Date();
dateArea.style.fontFamily= "Orbitron";
dateArea.style.fontSize="2em";
