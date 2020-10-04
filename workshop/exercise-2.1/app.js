console.log("exercise 2.1");

let area=document.querySelector(".main");
area.style.margin="5px 100px 0 100px";
//area.style.display="flex";

for(let i=1;i<=20;i++){
    let btnarr=document.createElement('button');
    btnarr.setAttribute('id', `btn-${i}`);
    btnarr.innerText=i;
    area.appendChild(btnarr);
    btnarr.addEventListener('click', newcolor);
    btnarr.style.color="white";
    btnarr.style.fontSize="18px";
    btnarr.style.backgroundColor="Red";
    btnarr.style.height="120px";
    btnarr.style.width="120px";
}

function newcolor(event){
    let btnid = event.currentTarget;
    console.log(btnid);
    btnid.style.backgroundColor="green";
}