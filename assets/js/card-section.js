'use strict'// @ts-nocheck
// selecting the number on the card 
const numberOnTheCard = document.getElementById("card-num")
const firstNumberOnTheCard = document.querySelector(".cardDigit-1").value
const secondNumberOnTheCard = document.querySelector(".cardDigit-2").value
const thirdNumberOnTheCard = document.querySelector(".cardDigit-3").value
const fourthNumberOnTheCard = document.querySelector(".cardDigit-4").value
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
const shabaInput = document.querySelector("#shabaInput").value
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


builderBtn.addEventListener("click", function () {
    const one = cardNumberInputOne.value;
    const two = cardNumberInputTwo.value;
    const three = cardNumberInputThree.value;
    const four = cardNumberInputFour.value;
    const shaba = shabaInput.value;

    const allDigitsFilled = one.length === 4 && two.length === 4 && three.length === 4 && four.length === 4;
    const shabaValid = shaba.length === 20 || shaba.length === 0;

    if (allDigitsFilled && shabaValid) {
        firstNumberOnTheCard.textContent = one;
        secondNumberOnTheCard.textContent = two;
        thirdNumberOnTheCard.textContent = three;
        fourthNumberOnTheCard.textContent = four;

        if (shaba.length === 20) {
            shabaOnTheCard.textContent = shaba;
        }
    } else {
        const myModal = new bootstrap.Modal(document.getElementById('warningModal'));
        myModal.show();
        document.querySelector(".wrongCardNumber").classList.remove("d-none");
    }
});




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




















































