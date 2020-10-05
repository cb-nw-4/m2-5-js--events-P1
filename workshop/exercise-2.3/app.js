let area=document.querySelector('.main');
//area.style.margin="30px";

for(let i=1;i<=20;i++){
    let boutons=document.createElement('button');
    boutons.innerText=i;
    boutons.setAttribute('id', `btn-${i}`);
    area.appendChild(boutons);
    boutons.style.position="absolute";
    let pos=Math.floor(Math.random()*70);
    console.log(pos);
    boutons.style.left=`${pos}%`;
    let pers=Math.floor(Math.random()*70);
    boutons.style.top=`${pers}%`;
    boutons.style.color="white";
    boutons.style.fontSize="18px";
    boutons.style.backgroundColor="Red";
    boutons.style.padding="20px";
    boutons.style.borderRadius="50%";
    boutons.addEventListener('click', toggle);
}

function toggle(event){
    let btn=event.currentTarget;
    switch(btn.style.backgroundColor){
        case 'red':
            btn.style.backgroundColor='green';
            break;
        case 'green':
            btn.style.backgroundColor='red';
            break;
    }
}