const time = document.querySelector('.time');
const start = document.querySelector('.btn-start');
const reset = document.querySelector('.btn-reset');
const stop = document.querySelector('.btn-stop');
const min = document.querySelector('.mins');
const sec = document.querySelector('.secs');
const miliSec = document.querySelector('.mili-secs');
// console.log(mins)
let secs = 0;
let mili_secs = 0;
let mins = 0;
let interval;

//Add Event Listeners
start.addEventListener('click', () => {
    interval = setInterval(timer, 10)
})
stop.addEventListener('click', () => {
    clearInterval(interval)
})
reset.addEventListener('click', () => {
    clearInterval(interval)
    min.innerHTML = '00';
    sec.innerHTML = '00';
    miliSec.innerHTML = '00';
})

//
function timer() {
    mili_secs++;
    if (mili_secs <= 9) {
        miliSec.innerHTML = '0' + mili_secs;
    }
    if (mili_secs > 9) {
        miliSec.innerHTML = mili_secs;
    }
    if (mili_secs > 99) {
        secs++;
        sec.innerHTML = '0' + secs;
        mili_secs = 0;
        miliSec.innerHTML = '0' + 0;
    }
    if (secs > 9) {
        sec.innerHTML = secs;
    }
    if (secs > 59) {
        mins++;
        min.innerHTML = '0' + mins;
        secs = 0;
        sec.innerHTML = '0' + 0;
    }
    if (mins > 9) {
        min.innerHTML = mins;
    }

}