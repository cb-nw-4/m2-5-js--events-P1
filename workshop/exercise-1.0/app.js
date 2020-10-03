// Exercise 1.0
// ------------
console.log('exercise-1');
document.querySelector("body").addEventListener("click", function(event) {
    let main = document.querySelector(".main");
    main.innerText = "You Win!";
});
