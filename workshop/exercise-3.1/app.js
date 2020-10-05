// Exercise 3.1
// ------------
console.log('exercise-3.1');
const div = document.querySelector("div");
let d = new Date();
setInterval((d) => {
    d = new Date();
    div.innerText = `${d}`;
}, 100);