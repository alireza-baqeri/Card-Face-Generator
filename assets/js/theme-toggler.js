'use strict'
const themeBtn = document.querySelector(".theme-toggle-btn")
themeBtn.addEventListener("click",() => {
    document.body.classList.toggle("body-class-dark")
});
console.log("What a world")