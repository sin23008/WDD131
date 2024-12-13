export { handleNav }

let floatingNavVisible = false;

function handleNav() {
    let navbar = document.querySelector(".headernav");
    let sticky = navbar.offsetHeight;
    if (window.scrollY > sticky && floatingNavVisible==false) {
        let floatingNav = document.createElement("div");
        floatingNav.classList.add("floatingNav");
        floatingNav.style.transform = "translateY(-150%)";
        floatingNav.style.transition = "transform 0.2s ease-out";
        floatingNav.style.background = "white";
        floatingNav.style.borderRadius = "50%";
        floatingNav.style.padding = "10px";
        floatingNav.style.position = "fixed";
        floatingNav.style.width = "50px";
        floatingNav.style.height = "50px";
        floatingNav.style.backgroundPositionY = "center 10px";

        // Create a container for the sliding elements
        let slideOutContainer = document.createElement("div");
        slideOutContainer.classList.add("headernav");
        slideOutContainer.style.position = "absolute";
        slideOutContainer.style.top = "0";
        slideOutContainer.style.left = "-5vw";
        slideOutContainer.style.width = "55vw";
        slideOutContainer.style.height = "50px";
        slideOutContainer.style.paddingleft = "300px";
        slideOutContainer.style.gap = "30px";
        slideOutContainer.style.display = "flex";
        slideOutContainer.style.justifyContent = "right";
        slideOutContainer.style.opacity = "0";
        slideOutContainer.style.background = "none";
        slideOutContainer.style.borderRadius = "0 10px 10px 0";
        slideOutContainer.style.padding = "10px";
        slideOutContainer.style.transform = "translateY(0%)";
        
        // Add the identical elements to the slideOutContainer
        let navElements = document.querySelectorAll(".headernav a");
        navElements.forEach(element => {
            let clone = element.cloneNode(true);
            slideOutContainer.appendChild(clone);
        });
        
        // Add more elements here...
        
        floatingNav.appendChild(slideOutContainer);
        
        // Add event listeners for hover effect
        floatingNav.addEventListener("mouseover", () => {
            slideOutContainer.style.transform = "translateX(5%)";
            slideOutContainer.style.transition = "transform 0.3s ease, opacity 0.7s ease";
            slideOutContainer.style.opacity = "1";
        });
        slideOutContainer.addEventListener("mouseout", () => {
            slideOutContainer.style.transform = "translateX(0%)";
            slideOutContainer.style.transition = "transform 0.3s ease, opacity 0.3s ease";
            slideOutContainer.style.opacity = "0";
            // slideOutContainer.style.transition = "opacity 0.2s ease";
        });

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
            nav.style.transform = "translateY(-120%)";
            nav.addEventListener("transitionend", () => {
                nav.remove();
            }, 300);
        });
        // document.querySelector(".floatingNav").remove();
        floatingNavVisible = false;
        console.log(floatingNavVisible);
    }
}