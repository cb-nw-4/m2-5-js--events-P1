

let area=document.querySelector('.main');
area.style.margin="5px 100px 0 100px";
area.style.display="flex";
area.style.flexWrap="wrap";
area.style.justifyContent="center";

for(let i=1;i<=20;i++){
    let buttons=document.createElement('button');
    buttons.innerText=i;
    buttons.setAttribute('id', `btn-${i}`);
    area.appendChild(buttons);
    buttons.style.backgroundColor="red";
    buttons.addEventListener('click', togglecolor);
    buttons.style.color="white";
    buttons.style.fontSize="18px";
    buttons.style.backgroundColor="Red";
    buttons.style.height="120px";
    buttons.style.width="120px";
}

function togglecolor(event){
    let btnid=event.currentTarget;
    switch(btnid.style.backgroundColor){
        case 'red':
            btnid.style.backgroundColor='green';
            break;
        case 'green':
            btnid.style.backgroundColor='red';
            break;
    }
}