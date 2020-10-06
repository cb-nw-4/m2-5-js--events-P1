console.log('exercise 3.1')

let mainContainer = document.getElementById('main');
let currentTime = document.createElement('div');
mainContainer.appendChild(currentTime);



currentTime.style.fontSize = '48px';
currentTime.style.padding = "20px"


const startTime = () => {
    const now = new Date();


    var time = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();

    currentTime.innerHTML = time;

    setTimeout(startTime, 500);

}