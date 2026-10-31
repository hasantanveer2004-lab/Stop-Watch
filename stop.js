let timedis = document.querySelector(".timerDisplay");

let str = document.getElementById("start");
let stp = document.getElementById("stop");
let reset = document.getElementById("reset");

let msec = 0;
let secs = 0;
let mins = 0;

let timerId = null;

str.addEventListener("click", () => {
    if(timerId !== null){
        clearInterval(timerId)
    }
    timerId = setInterval(startTimer, 10);
})

stp.addEventListener("click", () => {
  clearInterval(timerId)
})

reset.addEventListener("click", () => {
  clearInterval(timerId);
  timedis.innerHTML = '00 : 00 : 00';
  mins = secs = msec = 0;
})


function startTimer(){
    msec++;
    if(msec == 100){
        msec =0;
        secs++;
        if(secs== 60){
            secs = 0;
            mins++;
        }
    }

    let msecStr = msec < 10 ? `0${msec}` : msec;
    let secStr = secs < 10 ? `0${secs}` : secs;
    let minsStr = mins < 10 ? `0${mins}` : mins;

    timedis.innerHTML = `${minsStr} : ${secStr} : ${msecStr}`;
}