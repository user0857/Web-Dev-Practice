
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

function AMPMto24(time12h){
    const [time, modifier] = time12h.split(' ');

    let [hours, minutes, seconds] = time.split(':');

    if (hours === '12') {
        hours = '00';
    }

    if (modifier === 'PM') {
        hours = parseInt(hours, 10) + 12;
    }


    return `${hours}:${minutes}:${seconds}`;
}

async function getSunStatus(lat=51.5073219, log=-0.1276474){

    // "https://api.sunrise-sunset.org/json?lat=36.7201600&lng=-4.4203400&date=today"
    const res = await fetch("https://api.sunrise-sunset.org/json?" + new URLSearchParams({
    lat: lat,
    lng: log,
    date: "today"
    }));

    let data = await res.json();
    let parsedData = {};
    data = data["results"];
    
    parsedData["sunrise_start"] = AMPMto24(data["astronomical_twilight_begin"]);
    parsedData["sunrise_end"] = AMPMto24(data["sunrise"]);
    parsedData["sunset_start"] = AMPMto24(data["sunset"]);
    parsedData["sunset_end"] = AMPMto24(data["astronomical_twilight_end"]);
    console.log(parsedData);
    return parsedData;
}

function getSunIcon(timeInfo){
    const curTimeString = document.querySelector(".time").innerHTML;
    const iconField = document.querySelector(".timeIcon");
    if (timeInfo["sunrise_start"] < curTimeString < timeInfo["sunrise_end"]){
        iconField.src = "./img/sun_rise.png";
        console.log("rise");
    } else if (timeInfo["sunrise_end"] < curTimeString < timeInfo["sunrise_end"]){
        iconField.src = "./img/noon.png";
        console.log("noon");
    } else if (timeInfo["sunrise_end"] < curTimeString < timeInfo["sunrise_end"]){
        iconField.src = "./img/sun_fall.png";
        console.log("fall");
    } else {
        iconField.src = "./img/night_time.png";
        console.log("night");
    }
    
    if (document.querySelector("#blurredTimeContainter") != null){
        document.querySelector("#blurredTimeContainter").removeAttribute('id');
    }
    
}
setInterval(updateTime, 100);
setInterval(getSunIcon, 1000, getSunStatus());