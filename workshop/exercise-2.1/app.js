// Exercise 2.1
// ------------
console.log('exercise 2.1');

let group = [];

const main = document.querySelector("main");
for (i = 1; i < 21; i++) {
    const button = document.createElement('button');
    button.innerText = `${i}`;
    main.appendChild(button);
    group.push(button);
}

document.querySelectorAll('button').forEach(function(button) {
    button.addEventListener('click', function() {
        button.style.backgroundColor = "green";
    })
});
