function handleScroll() {
    let navbar = document.querySelector(".headernav");
    let sticky = navbar.offsetHeight;
    if (window.scrollY > sticky && floatingNavVisible==false) {
        let floatingNav = document.createElement("div");
        floatingNav.classList.add("floatingNav");
        floatingNav.style.transform = "translateX(-150%)";
        floatingNav.style.transition = "transform 0.2s ease-out";
        floatingNav.style.background = "white";
        floatingNav.style.borderRadius = "50%";
        floatingNav.style.padding = "10px";
        floatingNav.style.position = "fixed";
        floatingNav.style.width = "50px";
        floatingNav.style.height = "50px";
        floatingNav.style.backgroundPositionY = "10px";
        let logo = document.createElement("img");
        logo.src = "images/HobbyBoxLogo.svg";
        logo.alt = "HobbyBox Logo";
        floatingNav.appendChild(logo);
        document.body.appendChild(floatingNav);
        floatingNavVisible = true;
        console.log(floatingNavVisible);
        setTimeout(() => {
            floatingNav.style.transform = "translateX(0)";
        }, 0);
    } else if (window.scrollY < sticky && floatingNavVisible==true) {
        let floatingNavs = document.querySelectorAll(".floatingNav");
        floatingNavs.forEach(nav => {
            nav.style.transform = "translateX(-100%)";
            setTimeout(() => {
                nav.remove();
            }, 300);
        });
        // document.querySelector(".floatingNav").remove();
        floatingNavVisible = false;
        console.log(floatingNavVisible);
    }
}


function plusDivs(n) {
    showDivs(slideIndex += n);
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
let floatingNavVisible = false;
window.addEventListener("scroll", handleScroll);