// Exercise 1.0
// ------------
console.log('exercise-1');


document.body.addEventListener('click', textAppear);

function textAppear(){
    let cannoli=document.querySelector('.main');
    let newText=document.createElement('p');
    newText.innerText="You win!";
    cannoli.appendChild(newText);
}
