export { plusDivs, showDivs }

function plusDivs(n) {
    showDivs(slideIndex += n);
    console.log(slideIndex);
}

function showDivs(n) {
    let i;
    let slides = document.querySelectorAll(".homeSlides");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length};
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}

let slideIndex = 1;
showDivs(slideIndex);