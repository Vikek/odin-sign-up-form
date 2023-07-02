const imageCredit = document.querySelector(".image-credit");
const image = document.querySelector(".logo-section img");

function updateImageCredit() {
    const imageWidth = image.offsetWidth;
    imageCredit.style.width = imageWidth + 'px';
}

window.addEventListener("resize", function() {
    updateImageCredit();
});