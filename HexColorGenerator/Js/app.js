let code="#"
let colorGenerator=document.querySelector(".color-generator")
let colorCode=document.querySelector(".color-code")
let hexCodeElements=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","a","b","c","d","e","f"]
colorGenerator.addEventListener("click",function(){
      for(let i=0;i<6;i++){
       let randomNumber=Math.floor(Math.random()* hexCodeElements.length) 
       let kod=hexCodeElements.slice(randomNumber,randomNumber+1)
       code+=kod
      }
   document.body.style.backgroundColor=code
   colorCode.value=code
   code="#"
})
let copy = document.querySelector(".copy")
copy.addEventListener("click", function () {
let colorRandom = document.querySelector(".color-code")
let copyPassword = colorRandom.value
console.log(copyPassword)
let clipboard=document.createElement("textarea")
clipboard.value=copyPassword
document.body.appendChild(clipboard)
clipboard.select()
document.execCommand("copy")
clipboard.remove()
console.log("copy oldu")
})