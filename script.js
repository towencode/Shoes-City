/*      NAVBAR TOGGLE AND MENU       */
const navbarToggle = document.querySelector(`.navbar__toggle`);
const navbarMenu = document.querySelector(`.navbar__menu`);

navbarToggle.addEventListener("click", () => {
    navbarToggle.classList.toggle(`navbar__toggle--active`);
    navbarMenu.classList.toggle(`navbar__menu--active`);
});

/*      NAVBAR ACTIVE LINK       */

const navbarLinks = document.querySelectorAll(".navbar .navbar__menu-link");

navbarLinks.forEach(link => {
    link.addEventListener("click", () => {
        navbarLinks.forEach(item => item.classList.remove("navbar__menu-link--active"));

        link.classList.add("navbar__menu-link--active");
    });
});

/*      SLIDEBAR TOGGLE     */

const Slidbar = document.querySelector(".slidebar");
const SlidebarBtn = document.querySelector(".slidebar-toggle");

SlidebarBtn.addEventListener("click", () => {
    SlidebarBtn.classList.toggle("slidebar-toggle--active");
    Slidbar.classList.toggle("slidebar--active");

})