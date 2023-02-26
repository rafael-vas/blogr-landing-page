const navbarHeads = document.querySelectorAll(".navbar .head");
const navbarDropdownIcons = document.querySelectorAll(".navbar .dropdown-icon");
const navbarDropdowns = document.querySelectorAll(".navbar .dropdown");

for( let i = 0; i <= navbarHeads.length - 1; i++) {

    navbarHeads[i].addEventListener("click", () => {
        let activeNavbarHead = navbarHeads[i];

        for (let j = 0; j <= navbarHeads.length - 1; j++) {
            if (navbarHeads[j] !== activeNavbarHead) {
                if (navbarHeads[j].classList.contains("active")) {
                    navbarHeads[j].classList.remove("active")
                    navbarDropdownIcons[j].classList.remove("active");
                    navbarDropdowns[j].classList.remove("active");
                }
            }
        }

        navbarHeads[i].classList.toggle("active");
        navbarDropdownIcons[i].classList.toggle("active");
        navbarDropdowns[i].classList.toggle("active");
    })
}

const menuHamburger = document.querySelector(".header .menu-hamburger");
const navbar = document.querySelector(".header .navbar");

menuHamburger.addEventListener("click", () => {
    navbar.classList.toggle("active");

    if(navbar.classList.contains("active")) {
        menuHamburger.classList.add("close")
    } else {
        menuHamburger.classList.remove("close")
    }
})