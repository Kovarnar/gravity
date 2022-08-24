document.addEventListener('DOMContentLoaded', function () {
    const HEADER = document.querySelector('.header');
    const MENU_BUTTON = HEADER.querySelector('.menu__button');

    MENU_BUTTON.addEventListener('click', function () {
        HEADER.classList.toggle('header--active');
        document.body.classList.toggle('no-scroll');
    });
});