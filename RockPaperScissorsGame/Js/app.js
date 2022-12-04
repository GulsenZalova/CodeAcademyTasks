// Selected
let score=document.querySelector(".score")
let gameSelection=document.querySelector(".game-selection")
let gameStart=document.querySelector(".game-start")
let clickImages=document.querySelectorAll(".game-selection img")
let userChoice=document.querySelector(".user-choice")
let userChoiceArea=document.querySelector(".user-choice-area")
let computerChoiceArea=document.querySelector(".computer-choice-area")
let result=document.querySelector(".result")
let playAgain=document.querySelector('.play-again')
let computerChoice=document.querySelector(".computer-choice")
let gameRules=document.querySelector(".game-rules")
let modal=document.querySelector(".modal")
let modalClose=document.querySelector(".modal-close")
let container=document.querySelector(".container")
let userSelectImgId
let computerSelectImgId
let scorePoint=0


if(localStorage.getItem("mygamescore")==null){
    score.innerHTML=0
}else{
    score.innerHTML=JSON.parse(localStorage.getItem("mygamescore"))
}

// Modal open-close Start
gameRules.addEventListener("click",function(){
    modal.classList.add("active")
    container.classList.add("active")
})
modalClose.addEventListener("click",function(){
    modal.classList.remove("active")
    container.classList.remove("active")
})
// Modal Open-Close End

// Play Select
clickImages.forEach((clickImage)=>{
    clickImage.addEventListener("click",function(){
       userSelectImgId=clickImage.id
       selectImgSrc=clickImage.src
       userChoiceDisplay(userSelectImgId)
       computerChoiceDisplay()
       gameControl()
       score.innerHTML=JSON.parse(localStorage.getItem("mygamescore"))
       gameSelection.classList.add("active")
       gameStart.classList.remove("active") 
    })
})

function userChoiceDisplay(id){
    let userSelectedImg=""
    userSelectedImg+= `
    <h3>YOU PICKED</h3>
     <div class="btn btn-${id}">
    <img src="./images/icon-${id}.svg" alt="" class="user-choice" id="${id}">
</div>
    `
 userChoiceArea.insertAdjacentHTML("beforeend",userSelectedImg)
}

function computerChoiceDisplay(){
    let Ids=["rock","paper","scissors"]
    let randomId=Math.floor(Math.random() * Ids.length)
    computerSelectImgId=Ids[randomId]
    let computerSelectedImg=""
    computerSelectedImg+=`
    <h3>THE HOUSE PİCKED</h3>
    <div class="btn btn-${Ids[randomId]}">
    <img src="./images/icon-${Ids[randomId]}.svg" class="computer-choice" alt="" id="${Ids[randomId]}">
</div>
    `
    computerChoiceArea.insertAdjacentHTML("beforeend",computerSelectedImg)
}

function gameControl(){
    let resultText
    if(computerSelectImgId==userSelectImgId){
        resultText="DRAW"
    }
    if((computerSelectImgId=="rock" && userSelectImgId=="paper")||(computerSelectImgId=="paper" && userSelectImgId=="scissors")||(computerSelectImgId=="scissors" && userSelectImgId=="rock")){
        resultText="YOU WIN"
        scorePoint+=1
    }
    if((computerSelectImgId=="rock" && userSelectImgId=="scissors")||(computerSelectImgId=="paper" && userSelectImgId=="rock")||(computerSelectImgId=="scissors" && userSelectImgId=="paper")){
        resultText="YOU LOSE"
        scorePoint-=1
    }
    result.innerHTML=resultText
    if(scorePoint>0){
        score.innerHTML=scorePoint
    }else{
        score.innerHTML="0"
    }
    localStorage.setItem("mygamescore", JSON.stringify(scorePoint));
}
playAgain.addEventListener("click",function(){
    gameSelection.classList.remove("active")
    gameStart.classList.add("active") 
    computerChoiceArea.innerHTML=""
    userChoiceArea.innerHTML=""
    result.innerHTML=""
})
