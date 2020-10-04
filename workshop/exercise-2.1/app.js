console.log("exercise 2.1");

let area=document.querySelector(".main");

for(let i=1;i<=20;i++){
    let btnarr=document.createElement('button');
    btnarr.setAttribute('id', `btn-${i}`);
    btnarr.innerText=i;
    area.appendChild(btnarr);
    btnarr.addEventListener('click', newcolor);
}

function newcolor(event){
    let btnid = event.currentTarget;
    console.log(btnid);
    btnid.style.backgroundColor="green";
}