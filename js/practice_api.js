function updateTime(){
    let curTime = new Date();
    let hours = curTime.getHours();
    let minutes = curTime.getMinutes();
    let seconds = curTime.getSeconds();
    let timeField = document.querySelector(".time");


    if (minutes < 10){
        minutes = "0" + minutes;
    }

    if (seconds < 10){
        seconds = "0" + seconds;
    }

    let time_string = hours + ":" + minutes + ":" + seconds;
    timeField.innerHTML = time_string;
}
setInterval(updateTime, 1000);