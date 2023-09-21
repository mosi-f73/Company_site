const navBtn = document.querySelector(".nav__btn");
const navMenu = document.querySelector(".nav-menu");
let navOpen = false;
navBtn.addEventListener("click", function () {
    if (navOpen) {
        navMenu.classList.remove("nav-menu--open");
        navBtn.classList.remove("nav__btn--open");
        navOpen = false;
    } else {
        navMenu.classList.add("nav-menu--open");
        navBtn.classList.add("nav__btn--open");
        navOpen = true;
    }
});