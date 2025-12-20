/*      NAVBAR TOGGLE AND MENU       */
const navbarToggle = document.querySelector(`.navbar__toggle`);
const navbarMenu = document.querySelector(`.navbar__menu`);

navbarToggle.addEventListener("click", () => {
    navbarToggle.classList.toggle(`navbar__toggle--active`);
    navbarMenu.classList.toggle(`navbar__menu--active`);
});