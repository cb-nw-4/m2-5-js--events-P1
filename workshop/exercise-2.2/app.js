

let area=document.querySelector('.main');

for(let i=1;i<=20;i++){
    let buttons=document.createElement('button');
    buttons.innerText=i;
    buttons.setAttribute('id', `btn-${i}`);
    area.appendChild(buttons);
    buttons.style.backgroundColor="red";
    buttons.addEventListener('click', togglecolor);
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