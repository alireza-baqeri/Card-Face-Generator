"use strict";

// انتخاب عناصر کارت
const numberOnTheCard = document.getElementById("card-num");
const firstNumberOnTheCard = document.querySelector(".cardDigit-1");
const secondNumberOnTheCard = document.querySelector(".cardDigit-2");
const thirdNumberOnTheCard = document.querySelector(".cardDigit-3");
const fourthNumberOnTheCard = document.querySelector(".cardDigit-4");
const shabaOnTheCard = document.getElementById("shaba-num");
const nameOnTheCard = document.getElementById("card-name");
const cardBackground = document.querySelector(".card-container");
//color of texts on the card
const cardNumberColor = document.querySelectorAll(".card-num, .shaba-num, .card-name");
const colors = document.querySelectorAll(".cardTexts");
// انتخاب ورودی‌ها
const cardNumberInputOne = document.getElementById("card-digit-1");
const cardNumberInputTwo = document.getElementById("card-digit-2");
const cardNumberInputThree = document.getElementById("card-digit-3");
const cardNumberInputFour = document.getElementById("card-digit-4");
const shabaInput = document.querySelector(".shabaInput"); // اصلاح: کلاس به‌جای آیدی
const nameInput = document.querySelector(".nameInput");

// انتخاب دکمه‌ها
const themeChangerBtn = document.querySelector(".cardThemeChangerBtn"); // اصلاح: کلاس درست
const resetBtn = document.querySelector(".cardResetBtn");
const builderBtn = document.querySelector(".buildCardBtn");
const cardNumbersColorChangerBtn = document.querySelector(
    ".cardNumbersChangerBtn"
);
const cardDownloaderBtn = document.querySelector(".cardDownload");

// تابع کمکی برای بازنشانی پیام‌های خطا
function resetErrorMessages() {
    document.querySelector(".wrongCardNumber").classList.add("d-none");
    document.querySelector(".wrongShabaNumber").classList.add("d-none");
    document.querySelector(".wrongName").classList.add("d-none");
}

// رویداد برای دکمه ساخت
builderBtn.addEventListener("click", function (e) {
    e.preventDefault();
    resetErrorMessages();

    // ورودی‌های شماره کارت
    const one = cardNumberInputOne.value.trim();
    const two = cardNumberInputTwo.value.trim();
    const three = cardNumberInputThree.value.trim();
    const four = cardNumberInputFour.value.trim();
    const allDigitsFilled =
        one.length === 4 &&
        two.length === 4 &&
        three.length === 4 &&
        four.length === 4;

    // ورودی شبا
    const shaba = shabaInput.value.trim();
    const shabaValid = shaba.length === 0 || shaba.length === 20;

    // ورودی نام
    const personName = nameInput.value.trim();
    const nameValid = personName.replace(/\s/g, "").length > 3;

    let errors = 0;

    // اعتبارسنجی شماره کارت
    if (allDigitsFilled) {
        firstNumberOnTheCard.textContent = one;
        secondNumberOnTheCard.textContent = two;
        thirdNumberOnTheCard.textContent = three;
        fourthNumberOnTheCard.textContent = four;
        let cardEightDigits = one + two;

    } else {
        document.querySelector(".wrongCardNumber").classList.remove("d-none");
        errors++;
    }

    // اعتبارسنجی شبا
    if (shabaValid) {
        if (shaba) {
            shabaOnTheCard.textContent = `IR ${shaba}`;
        } else {
            shabaOnTheCard.textContent = " ";
        }
    } else {
        document.querySelector(".wrongShabaNumber").classList.remove("d-none");
        errors++;
    }

    // اعتبارسنجی نام
    if (nameValid) {
        nameOnTheCard.textContent = personName;
    } else {
        document.querySelector(".wrongName").classList.remove("d-none");
        errors++;
    }

    // نمایش مودال در صورت وجود خطا
    if (errors > 0) {
        const myModal = new bootstrap.Modal(
            document.getElementById("warningModal")
        );
        myModal.show();
    }
});
let currentTheme;
// رویداد برای دکمه تغییر تم
themeChangerBtn.addEventListener("click", function (e) {
    e.preventDefault();
    const themes = [
        "back-default",
        "back-1",
        "back-2",
        "back-3",
        "back-4",
        "back-5",
        "back-6",
        "back-7",
        "back-8",
        "back-9",
        "back-10",
        "back-11",
        "back-12",
        "back-13",
        "back-14",
        "back-15",
        "back-16",
    ];

    // پیدا کردن تم فعلی
    const current = cardBackground.classList[1] || "back-default";
    // پیدا کردن تم بعدی
    const newTheme = themes[(themes.indexOf(current) + 1) % themes.length];

    // حذف تم فعلی و اضافه کردن تم جدید
    cardBackground.classList.remove(current);
    cardBackground.classList.add(newTheme);

    // به‌روزرسانی متغیر جهانی
    currentTheme = newTheme;
});

// رویداد برای دکمه تغییر رنگ متن
let colorCounter = 0;
cardNumbersColorChangerBtn.addEventListener("click", function (e) {
    e.preventDefault();

    // حذف کلاس قبلی از همه عناصر
    colors.forEach((element) => {
        element.classList.remove(`cardTextColor-${colorCounter}`);
    });

    // افزایش کانتر و ریست به 1 بعد از 4
    colorCounter = (colorCounter % 4) + 1;

    // اضافه کردن کلاس جدید به همه عناصر
    colors.forEach((element) => {
        element.classList.add(`cardTextColor-${colorCounter}`);
        return colorCounter;
    });
});
// منطق تغییر رنگ متن (مثال: تغییر رنگ به صورت تصادفی)
// const colors = ["#ffffff", "#000000", "#ff0000", "#00ff00", "#0000ff"];
// const randomColor = colors[Math.floor(Math.random() * colors.length)];
// cardNumberColor.forEach((element) => {
//   element.style.color = randomColor;
// });

// رویداد برای دکمه دانلود
cardDownloaderBtn.addEventListener("click", function (e) {
    e.preventDefault();

    // منطق دانلود تصویر (نیاز به کتابخانه مثل html2canvas)
    // مثال:
    html2canvas(cardBackground).then((canvas) => {
        const link = document.createElement("a");
        link.download = "card.png";
        link.href = canvas.toDataURL("image/png");
        link.click();
    });
    alert(
        "قابلیت دانلود تصویر هنوز پیاده‌سازی نشده است. از html2canvas استفاده کنید."
    );
});

// رویداد برای دکمه ریست
resetBtn.addEventListener("click", function (e) {
    e.preventDefault(); // جلوگیری از رفرش صفحه

    // ریست ورودی‌ها
    cardNumberInputOne.value = "";
    cardNumberInputTwo.value = "";
    cardNumberInputThree.value = "";
    cardNumberInputFour.value = "";
    shabaInput.value = "";
    nameInput.value = "";

    // ریست متن‌های کارت
    firstNumberOnTheCard.textContent = "XXXX";
    secondNumberOnTheCard.textContent = "XXXX";
    thirdNumberOnTheCard.textContent = "XXXX";
    fourthNumberOnTheCard.textContent = "XXXX";
    shabaOnTheCard.textContent = "IRXX XXXX XXXX XXXX XXXX XX";
    nameOnTheCard.textContent = "نام شما";

    // ریست تم
    cardBackground.classList.remove(currentTheme);
    cardBackground.classList.add("back-default");
    currentTheme = "back-default"; // به‌روزرسانی متغیر جهانی
    document.forEach(".cardTexts").classList.add("cardTextColor-1");

    // ریست پیام‌های خطا
    resetErrorMessages();
});
