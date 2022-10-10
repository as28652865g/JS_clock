# JS_clock

## 作品連結：https://as28652865g.github.io/JS_clock/

使用Figma先切出一個樣板

![時鐘1](https://user-images.githubusercontent.com/58939150/194816792-64f591be-619a-4e91-9097-1eb972efdaeb.png)


1. 數字擺放位置：先將圓切成12等分，在將數字擺放到正確位置上。(一個圓360°/12(個數字)=30°)一個小時走了30° 

![時鐘2](https://user-images.githubusercontent.com/58939150/194817433-57139886-5aa4-48e2-9395-623967626f5e.png)
![時鐘3](https://user-images.githubusercontent.com/58939150/194817717-7d17613c-ccd4-4524-a30f-0e87b175973b.png)

2. 圓點製作：分針和秒針一樣都是60格(分鐘/秒鐘)，算式(360°/60格) = 6°(分/秒)，可以再畫一個內圓方便對齊。

以上差不多畫完就可以將時鐘輸出成PNG檔，切版的時候就可以直接當底圖使用很方便。


![時鐘4](https://user-images.githubusercontent.com/58939150/194818606-f01df508-56e8-4c5b-ba53-52ede4407373.png)


## JS 部分
1. 先將時間部分取出來 (提示：Date()、getMonth()...)
2. 使用JS更改CSS指針選轉角度(提示：css動畫會用到transform = rotate())
3. 用SetInterval()去做每秒鐘更新一次畫面
以上都了解大致上已經可以做出一個會動的時鐘了。
```
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
    //電子時鐘(一般時鐘可忽略以下)
    //判斷如果時間到0再前方再補上一個0補齊都是兩位數
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
```
### 電子時鐘
我使用switch方式去將getDay()取出來的阿拉伯數字改成國字數字顯示
```
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

        default:
            break;
    }
}
```
