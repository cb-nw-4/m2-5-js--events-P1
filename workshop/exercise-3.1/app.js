//clock

let area= document.querySelector(".main");
area.style.display="flex";
area.style.justifyContent="center";
area.style.marginTop="15%";

let dateArea=document.createElement('p');
area.appendChild(dateArea);
let event=setInterval(() => {
    let displaydate=new Date();
    dateArea.innerText=`${displaydate}`;
}, 1000);

dateArea.style.fontFamily= "Orbitron";
dateArea.style.fontSize="2em";
