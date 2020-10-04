// Exercise 2.3
// ------------
console.log('exercise 2.3');

const main = document.querySelector("main");
for (i = 1; i < 21; i++) {
    const button = document.createElement('button');
    button.innerText = `${i}`;
    main.appendChild(button);
    button.style.backgroundColor = 'rgb(153, 0, 0)';
    let left = Math.floor(Math.random() * 100);
    let top = Math.floor(Math.random() * 100);
    button.style.left = `${left}%`;
    button.style.top = `${top}%`;
}

document.querySelectorAll('button').forEach(function(button) {
    button.addEventListener('click', function() {
        if (button.style.backgroundColor === 'rgb(153, 0, 0)') {
            button.style.backgroundColor = 'rgb(0, 89, 0)';
        } else {
            button.style.backgroundColor = 'rgb(153, 0, 0)';
        }
    })
});
