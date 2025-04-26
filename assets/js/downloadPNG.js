// import html2canvas from 'html2canvas';
// import {isCardFilled} from './card-section.js';

document.querySelector(".cardDownload").addEventListener("click", downloadPNG);

// تابع دانلود تصویر
document.querySelector(".cardDownload").addEventListener("click", downloadPNG);

document.querySelector(".cardDownload").addEventListener("click", downloadPNG);

function downloadPNG(e) {
    e.preventDefault();
    if (!window.isCardFilled()) {
        document.querySelector(".wrongCardNumber").classList.remove("d-none");
        const myModal = new bootstrap.Modal(document.getElementById("warningModal"));
        myModal.show();
        return;
    }
    const element = document.querySelector(".card-container");
    html2canvas(element, {
        scale: 3,
        useCORS: true,
        backgroundColor: null,
        logging: false,
        width: element.offsetWidth,
        height: element.offsetHeight
    }).then(canvas => {
        const link = document.createElement('a');
        link.download = 'card-image.png';
        link.href = canvas.toDataURL('image/png');
        link.click();
    }).catch(error => {
        console.error('خطا در دانلود تصویر:', error);
    });
}