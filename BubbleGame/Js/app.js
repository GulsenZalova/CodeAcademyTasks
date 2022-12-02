let entryName=document.querySelector("#entry-name")
let startBtn=document.querySelector(".startBtn")
let enteredGamerName
let gamer=document.querySelector(".gamer")
let gameScreen=document.querySelector(".gameScreen")
let startScreen=document.querySelector(".startScreen")
let stopGameBtn=document.querySelector(".stop")
let controlBtns=document.querySelectorAll(".game-control-btns .btn")
let startGameBtn=document.querySelector(".startGame")
let easy=document.querySelector(".easy")
let medium=document.querySelector(".medium")
let hard=document.querySelector(".hard")
let gameArea=document.querySelector(".game-area")
let gameAreaDivs=document.querySelectorAll(".game-area .bubble")
let scoreDiv=document.querySelector(".score")
let intervalId
let score=0
let highScoreCount
let bestGamePoint=document.querySelector(".high-score")
let audio = new Audio("./Audio/bubble-sound.wav");

startBtn.addEventListener("click",function(){
    if(entryName.value==""){
        alert("Zəhmət olmasa oyunçu daxil edin")
    }else{
        enteredGamerName=entryName.value
        gamer.innerHTML=enteredGamerName
        easy.classList.add("started");
        startScreen.classList.add("hide")
        gameScreen.classList.remove("hide")
        if (localStorage.getItem(entryName.value)) {
            bestGamePoint.innerHTML = `${localStorage.getItem(entryName.value)}`;
        } else {
            bestGamePoint.innerHTML = 0;
        }
    }
})

stopGameBtn.addEventListener("click",function(){
    gameScreen.classList.add("hide")
    startScreen.classList.remove("hide")
    alert("Oyun Bitti")
    storage()
    gameOver()
})

startGameBtn.addEventListener("click",function(){
    createBubble(2000);
    easy.classList.add("started");
    easy.disabled=false
    medium.disabled=false
    hard.disabled=false
    stopGameBtn.disabled=false
    startGameBtn.disabled=true
})

easy.addEventListener("click",function(){
    createBubble(1500)
    levelSelection()
    easy.classList.add("started")
})
medium.addEventListener("click",function(){
    createBubble(1000)
    levelSelection()
    medium.classList.add("started")
})

hard.addEventListener("click",function(){
    createBubble(500)
    levelSelection()
    hard.classList.add("started")
})


function createBubble(intervalTime){
    clearInterval(intervalId)
    intervalId=setInterval(()=>{
    let createdBubble=document.createElement("div")
    createdBubble.className="bubble"
    gameArea.appendChild(createdBubble)
    let randomPositionLeft=Math.floor(Math.random() * 300)
    let randomPositionTop=Math.floor(Math.random() * 300)
    createdBubble.style.left=randomPositionLeft+ "px"
    createdBubble.style.top=randomPositionTop + "px"

    createdBubble.addEventListener("click", function (event) {
        clickBubble(event.target)
    });


    if (document.querySelectorAll(".bubble").length == 50) {
        alert(`Sizin oyun nəticəniz:${score}`);
        storage()
        gameOver()
    }
    },intervalTime)
}

function gameOver(){
    gameArea.innerHTML = " ";
    clearInterval(intervalId)
   let gameBtns= document.querySelectorAll(".game")
   gameBtns.forEach(function (gameBtn) {
       gameBtn.classList.add("disabled");
    })
    startGameBtn.classList.remove("disabled");
    let levelBtns=document.querySelectorAll(".level")
    levelBtns.forEach(function (levelBtn) {
        levelBtn.classList.remove("started");
    })
    score=0
    scoreDiv.innerHTML=score
}

function clickBubble(bubble){
    bubble.style.opacity="0"
    audio.play()
    if (easy.classList.contains("started")) {
        score += 1;
    } else if (medium.classList.contains("started")) {
        score += 2
    } else {
        score += 3;
    }
    scoreDiv.innerHTML=score
}

function levelSelection() {
    let levelBtns=document.querySelectorAll(".level")
    levelBtns.forEach(function (levelBtn) {
        levelBtn.classList.remove("started");
        if (levelBtn == event.target) {
            levelBtn.classList.add("disable");
        } else {
           levelBtn.classList.remove("disable")
        }
    })
}
function storage(){
    if (localStorage.getItem(entryName.value)) {
        if (localStorage.getItem(entryName.value) < score) {
            localStorage.setItem(entryName.value, score);
            bestGamePoint.innerText = `${localStorage.getItem(entryName.value)}`;
        }
    } else {
        localStorage.setItem(entryName.value, score);
        bestGamePoint.innerText = `${localStorage.getItem(entryName.value)}`;
    }
}