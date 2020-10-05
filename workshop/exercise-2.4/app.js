let area=document.querySelector('.main');

let btnarr=[]; //empty array: to be used to check the result

//start button
let btn=document.createElement('button');
btn.innerText="start";
area.appendChild(btn);
btn.addEventListener('click', startClicking);

//counter display
let range=document.createElement('p');
area.appendChild(range);

//result display
let resulttext=document.createElement('p');
area.appendChild(resulttext);

//counter for timer and result checking
let newcounter=Math.floor(Math.random() * 11);  
let finalvalue=newcounter;
console.log("Range="+newcounter);

//start the game
function startClicking(){
    callbuttons();
    btn.style.display="none";
    let counter2=setInterval(() => {
        if (newcounter>=0){
            range.innerText=`${newcounter}`;
        }
        else{
            displayResult();
            clearInterval(counter2);
        }
        newcounter--;
    }, 1000);
    console.log(btnarr);
}

//display the result and end
function displayResult(){
    if(btnarr.length>=finalvalue){
        resulttext.innerText="YOU WIN!"
    }
    else{
        resulttext.innerText="YOU LOSE!"
    }
    for(let i=1;i<=newcounter;i++){
        document.getElementById(`btn-${i}`).removeEventListener('click',colours);
    }
}

//adding another div
let newDiv=document.createElement('div');
document.body.appendChild(newDiv);

//make buttons. To be called when the game starts
function callbuttons(){
    for(let i=1;i<=newcounter;i++){
        let boutons=document.createElement('button');
        boutons.innerText=i;
        boutons.setAttribute('id',`btn-${i}`);
        newDiv.appendChild(boutons);
        boutons.style.backgroundColor="#800000";
        boutons.style.position="relative";
        let pos=Math.floor(Math.random()*70);
        boutons.style.left=`${pos}%`;
        let pers=Math.floor(Math.random()*70);
        boutons.style.top=`${pers}%`;
        boutons.style.padding="20px";
        boutons.style.borderRadius="50%";
        boutons.style.color="white";
        boutons.style.fontSize="15px";
        boutons.addEventListener('click', colours);
    }
}

//change colours
function colours(event){
    let btnclick=event.target.id;
    //console.log(btnclick);
    document.getElementById(btnclick).style.backgroundColor='green';
    btnarr.push(btnclick);
}

//------------styling all below-----------//
//styling for header
area.style.display='flex';
area.style.justifyContent="center";
area.style.padding="30px";
area.style.backgroundColor="gray";
area.style.height="50px";

//styling for start button
btn.style.padding="15px 30px 15px 30px";
btn.style.borderRadius="5px";
btn.style.backgroundColor="white";
btn.style.color="orange";
btn.style.borderColor="orange";


//styling for range text
range.style.color="white";
range.style.fontFamily="Abril Fatface";
range.style.fontSize="3.5em";
range.style.fontWeight="900";

//styling for result text
resulttext.style.position="absolute";
resulttext.style.fontFamily="Abril Fatface";
resulttext.style.fontSize="10em";
resulttext.style.color="white";
resulttext.style.top="30%";
resulttext.style.zIndex="1";

//newDiv styling
newDiv.style.margin="50px";
newDiv.style.height="350px";
newDiv.style.backgroundColor="gray";