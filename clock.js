setInterval(showTime,1000);

function showTime(){

    let time = new Date();
    let hour=time.getHours();
    let min=time.getMinutes();
    let sec=time.getSeconds();
    let am_pm='AM'
    if(hour>=12){
        if(hour>12){
            hour=hour-12;
        }
        am_pm='PM'
    }
    if(hour<10){
        hour="0"+hour;
    }
    if(min<10){
        min="0"+min;
    }
    if(sec<10){
        sec="0"+sec;
    }

    let currentTime=hour+":"+min+":"+sec+":"+am_pm;
    document.getElementById('clock').innerHTML=currentTime;
}
showTime();