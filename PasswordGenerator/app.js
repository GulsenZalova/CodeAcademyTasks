let password = ""
let passwordLength = document.querySelector("#password-length")
let checkLower = document.querySelector("#lower")
checkLower.addEventListener("change", function () {
    let lowerList = "qwertyuiopasdfghjklzxcvbnm"
    for (let i = 0; i < lowerList.length; i++) {
        if (checkLower.checked) {
            let randomLower = Math.floor(Math.random() * lowerList.length)
            password += lowerList.slice(randomLower, randomLower + 1)
        }
    }
})

let checkUpper = document.querySelector("#upper")
checkUpper.addEventListener("change", function () {
    let upperList = "QWERTYUIOPASDFGHJKLZXCVBNM"
    for (let i = 0; i < upperList.length; i++) {
        if (checkUpper.checked) {
            let randomUpper = Math.floor(Math.random() * upperList.length)
            password += upperList.slice(randomUpper, randomUpper + 1)
        }
    }
})

let checkNumber = document.querySelector("#number")
checkNumber.addEventListener("change", function () {
    let numberList = "0123456789"
    for (let i = 0; i < numberList.length; i++) {
        if (checkNumber.checked) {
            let randomNumber = Math.floor(Math.random() * numberList.length)
            password += numberList.slice(randomNumber, randomNumber + 1)
        }
    }
})

let checkSymbol = document.querySelector("#symbol")
checkSymbol.addEventListener("change", function () {
    let symbolList = "!@#$%^*&*(){}[]=<>/.,-_'"
    for (let i = 0; i < symbolList.length; i++) {
        if (checkSymbol.checked) {
            let randomSymbol = Math.floor(Math.random() * symbolList.length)
            password += symbolList.slice(randomSymbol, randomSymbol + 1)
        }
    }
})

let generatorButton = document.querySelector("#generator")
generatorButton.addEventListener("click", function () {
    let passwordRandom = document.querySelector("#password-random")
    let generatedPassword = ""
    for (let i = 0; i < passwordLength.value; i++) {
        let generateRandomPassword = Math.floor(Math.random() * password.length)
        generatedPassword += password.slice(generateRandomPassword, generateRandomPassword + 1)
    }
    passwordRandom.value = generatedPassword
    console.log(generatedPassword)
})


let copy = document.querySelector("#copy")
copy.addEventListener("click", function () {
    let passwordRandom = document.querySelector("#password-random")
    let copyPassword = passwordRandom.value
    console.log(copyPassword)
    let clipboard=document.createElement("textarea")
    clipboard.value=copyPassword
    document.body.appendChild(clipboard)
    clipboard.select()
    document.execCommand("copy")
    clipboard.remove()
    console.log("copy oldu")
})
