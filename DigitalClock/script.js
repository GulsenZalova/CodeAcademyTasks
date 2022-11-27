let seconds = document.querySelector("#seconds")
let minutes = document.querySelector("#minutes")
let hour = document.querySelector("#hour")
let nextSec = document.querySelector(".next-sec")
let prevSec = document.querySelector(".prev-sec")
let minNextSec = document.querySelector(".min-next-sec")
let minprevSec = document.querySelector(".min-prev-sec")
let hourNext = document.querySelector(".hour-next")
let hourPrev = document.querySelector(".hour-prev")
function secondsPlus() {
    if (nextSec.innerHTML != "9") {
        let newNextSec = Number(nextSec.innerHTML) + 1
        nextSec.innerHTML = newNextSec
    } else {
        if (prevSec.innerHTML != "5") {
            let newPrevSec = Number(prevSec.innerHTML) + 1
            prevSec.innerHTML = newPrevSec
        } else {
            prevSec.innerHTML = 0
            nextSec.innerHTML = 0
            minutesPlus()
        }
        nextSec.innerHTML = 0
    }
}
function minutesPlus() {
    if (minNextSec.innerHTML != "9") {
        let newNextSec = Number(minNextSec.innerHTML) + 1
        minNextSec.innerHTML = newNextSec
    } else {
        if (minprevSec.innerHTML != "5") {
            let newPrevSec = Number(minprevSec.innerHTML) + 1
            minprevSec.innerHTML = newPrevSec
        } else {
            minprevSec.innerHTML = 0
            minNextSec.innerHTML = 0
            hoursPlus()
        }
        minNextSec.innerHTML = 0
    }
}

function hoursPlus() {
    if (hourNext.innerHTML != "9") {
        let newNextSec = Number(hourNext.innerHTML) + 1
        hourNext.innerHTML = newNextSec
        if(hourPrev.innerHTML == "2" && hourNext.innerHTML == "3"){
            hourNext.innerHTML = 0
            hourPrev.innerHTML = 0
        }
    }
    else {
        if (hourPrev.innerHTML != "2") {
            let newPrevSec = Number(hourPrev.innerHTML) + 1
            hourPrev.innerHTML = newPrevSec
        }
        hourNext.innerHTML = 0
    }
}


setInterval(secondsPlus, 1000)
