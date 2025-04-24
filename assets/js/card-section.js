'use strict'// @ts-nocheck
// selecting the number on the card 
const numberOnTheCard = document.getElementById("card-num")
const firstNumberOnTheCard = document.querySelector(".cardDigit-1")
const secondNumberOnTheCard = document.querySelector(".cardDigit-2")
const thirdNumberOnTheCard = document.querySelector(".cardDigit-3")
const fourthNumberOnTheCard = document.querySelector(".cardDigit-4")
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






builderBtn.addEventListener("click", function (e) {
     e.preventDefault();
    // card
    const one = cardNumberInputOne.value;
    const two = cardNumberInputTwo.value;
    const three = cardNumberInputThree.value;
    const four = cardNumberInputFour.value;

    // if (shabaInput.value.length === 20) { 
    //     const shaba = shabaInput.value;
    // } else {
    //     const shaba = 0;
    // }
    
    // if (typeof(Number(shabaInput.value)) === "number") {
      
    // } else {
    //     const shabaValid = false
    // }
    // const shabaNull = typeof(shabaInput.value) ? Number: false ;
    // let shaba
    // if (!shabaNull) { 
    //     shaba = shabaInput.value; 
    // }

    const allDigitsFilled = one.length === 4 && two.length === 4 && three.length === 4 && four.length === 4;
    // shaba
    const shabaValid = shaba.length === 20 || shaba.length === 0;
    // name
    const personName = nameOnTheCard.value;
    const nameValid = personName.replace(" ", "").length > 3;

    let errors = 0;


    if (allDigitsFilled) {
        firstNumberOnTheCard.textContent = one;
        secondNumberOnTheCard.textContent = two;
        thirdNumberOnTheCard.textContent = three;
        fourthNumberOnTheCard.textContent = four;

    } else {
        document.querySelector(".wrongCardNumber").classList.remove("d-none");
        errors++;
    }

    if (shabaValid) {
        shabaOnTheCard.textContent = shaba;
    } else {
        if (shaba.value.length === 0) {
            shabaOnTheCard.textContent = ' ';
        } else {
            document.querySelector(".wrongShaba").classList.remove("d-none");
            errors++;
        }
    }
    if (nameValid) {
        personName.textContent = nameInput;
    } else {
        document.querySelector(".wrongName").classList.remove("d-none");
        errors++;
    }
    if (errors > 0) {
        const myModal = new bootstrap.Modal(
          document.getElementById("warningModal")
        );
        myModal.show();
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




















































