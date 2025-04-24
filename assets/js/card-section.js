'use strict'// @ts-nocheck
// selecting the number on the card 
const numerOnTheCard = document.getElementById("card-num")
// selecting the shaba on the card
const shabaOnTheCard = document.getElementById("shaba-num")
//selecting the name on the card
const nameOnTheCard = document.getElementById("card-name")
//selecting the Cards background
const cardBackground = document.querySelector(".card-container")
// Selecting the Card Numbers
const cardNumberColor = document.querySelectorAll(".card-num,.shaba-num,.card-name")

//⬇️selecting the inputs
//4inputs for 4digits
const cardNumberInputOne = document.querySelector("#card-digit-1")
const cardNumberInputTwo = document.querySelector("#card-digit-2")
const cardNumberInputThree = document.querySelector("#card-digit-3")
const cardNumberInputFour = document.querySelector("#card-digit-4")
// shaba input
const shabaInput = document.querySelector("#shabaInput")
//name input
const nameInput = document.querySelector("#nameInput")

//⬇️ Selecting buttons
//theme change button
const themeChangerBtn = document.querySelector(".cardNumbersChangerBtn")
// selecting the reset button
const resetBtn = document.querySelector(".cardResetBtn")
//selecting the builder button 
const builderBtn = document.querySelector(".buildCardBtn")
//selecting card numbers color changer btn
const cardNumbersColorChangerBtn = document.querySelector(".cardNumbersColorChangerBtn")
//selecting picture generator btn
const cardDownloaderBtn = document.querySelector(".cardDownloaderBtn")

let enteredCardNum = "";

builderBtn.addEventListener("click", function () {

    enteredCardNum = cardNumberInputOne.value + " " + cardNumberInputTwo.value + " " + cardNumberInputThree.value + " " + cardNumberInputFour.value
    console.log(enteredCardNum)
})





// cardNumberInputOne.addEventListener("input", function (e) {
//     let eValue = e.target.value;
//     if (!isNaN(eValue) && eValue !== "") { // چک کن عددی باشه
//         numerOnTheCard.textContent = eValue;
//
//     }
// })


// cardNumberInputOne.addEventListener("input", function (e) {
//     let eValue = e.target.value;
//     if (!isNaN(eValue) && eValue !== "") { // چک کن عددی باشه
//         numerOnTheCard.textContent = eValue;
//
//     }
// })

// cardNumberInput.forEach(input => {
//     input.addEventListener("input",function(e)){
//         const value = e.target.value;
//         if(!isNaN())
//     }
// })




















































