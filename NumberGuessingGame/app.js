let alertBox=document.querySelector(".alert-box")
let entryGuess=document.querySelector("#entry-guess");
let guessGenerator=document.querySelector("#guess-generator");
let guessNumber=document.querySelector(".guess-number")
let randomNumber=document.querySelector(".random-number")
let resulMessagge=document.querySelector(".result-messagge")
guessGenerator.addEventListener("click",function(){
    let randomNumberGenerate=Math.floor(Math.random() * 15)
    let guessNumberGenerate=entryGuess.value
    if(randomNumberGenerate!=0){
        randomNumber.innerHTML=randomNumberGenerate
    }
    if(entryGuess.value==""){
        alertMessagge("Zəhmət olmasa təxmin etdiyiniz ədədi yazın!!!")
        clearSetTimeOut()
        clear()
    }
    else{
        if(entryGuess.value>=1 && entryGuess.value<=15){
        guessNumber.innerHTML=guessNumberGenerate
        if(guessNumberGenerate==randomNumberGenerate){
            controlGuess("Sizin təxmininiz doğrudur!!!")
        }else if(guessNumberGenerate>randomNumberGenerate){
            controlGuess("Sizin təxmininiz çox böyükdür!!!")
        }else if(guessNumberGenerate<randomNumberGenerate){
            controlGuess("Sizin təxmininiz çox kiçikdir!!!")
        }
    }else{
        alertMessagge("Sadəcə 1-15 arası rəqəmlər daxil edin!!!")
        clearSetTimeOut()
        clear()
    }
    }
    entryGuess.value=""
})

function controlGuess(messagge){
    resulMessagge.innerHTML=messagge
}
function alertMessagge(messagge){
    alertBox.innerHTML=messagge
    alertBox.style.backgroundColor="white"
}
function clearSetTimeOut(){
    setTimeout(()=>{
        alertBox.innerHTML=""
        alertBox.style.backgroundColor=""
    },3000)
}
function clear(){
    randomNumber.innerHTML=""
    guessNumber.innerHTML=""
}