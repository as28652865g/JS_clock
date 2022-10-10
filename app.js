
let hourHand = document.querySelector('.hour-hand');
let minHand = document.querySelector('.min-hand');
let secondHand = document.querySelector('.second-hand');
let digitalHours = document.querySelector('.hours');
let digitalMins = document.querySelector('.mins');
let digitalSecs = document.querySelector('.secs');
let daytime = document.querySelector('.daytime');


function setDate() {
    const now = new Date();
    let hours = now.getHours();
    let min = now.getMinutes();
    let sec = now.getSeconds();
    let hoursDeg = (hours / 12)*360; // 360/12=30，一小時30度
    let minDeg = (min / 60)*360; // 360/60=6，一分鐘6度
    let secDeg = (sec / 60)*360; 
    hourHand.style.transform = `rotate(${hoursDeg}deg)`;
    minHand.style.transform = `rotate(${minDeg}deg)`;
    secondHand.style.transform = `rotate(${secDeg}deg)`;
    // digitalHours.innerHTML = hours;
    // digitalMins.innerHTML = min;
    // digitalSecs.innerHTML = sec;
    if(sec < 10 && sec >=0){
        digitalSecs.innerHTML = `0${sec}`;
    }else{
        digitalSecs.innerHTML = sec;
    }
    if(min < 10 && min >=0){
        digitalMins.innerHTML = `0${min}`;
    }else{
        digitalMins.innerHTML = min;
    }
    if(hours < 10 && hours >=0){
        digitalHours.innerHTML = `0${hours}`;
    }else{
        digitalHours.innerHTML = hours;
    }
}

function getDate() {
    const now = new Date();
    let month = now.getMonth()+1;
    let date = now.getDate();
    let day = now.getDay();
    
    switch (day){
        case 0 :
            daytime.innerHTML = `${month}月${date}日、星期日`;
        break;
        case 1 :
            daytime.innerHTML = `${month}月${date}日、星期一`;
        break;
        case 2 :
            daytime.innerHTML = `${month}月${date}日、星期二`;
        break;
        case 3 :
            daytime.innerHTML = `${month}月${date}日、星期三`;
        break;
        case 4 :
            daytime.innerHTML = `${month}月${date}日、星期四`;
        break;
        case 5 :
            daytime.innerHTML = `${month}月${date}日、星期五`;
        break;
        case 6 :
            daytime.innerHTML = `${month}月${date}日、星期六`;
        break;
    }
}
setDate();
getDate();

setInterval(setDate, 1000);

