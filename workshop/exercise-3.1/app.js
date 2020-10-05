const formatTime = (time) => {
    let newTime = "0" + time;
    return newTime.slice(-2); 
}

let main = document.querySelector(".main");
const d = new Date();
main.innerHTML = `Time: ${formatTime(d.getHours())}:${formatTime(d.getMinutes())}:${formatTime(d.getSeconds())}`;
