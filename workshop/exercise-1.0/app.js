// Exercise 1.0
// ------------
console.log('exercise-1');

document.addEventListener("click", show);

function show(){
    let txt = document.createElement("p");
    txt.innerHTML = "Hi!";
    document.body.appendChild(txt);
  }; 