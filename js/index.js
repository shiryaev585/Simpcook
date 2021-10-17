const registrationLinkBox = document.querySelector('.header__menu-item-reg');

window.addEventListener('click', ({ target }) => {
    if (target.classList.contains('header__menu-item-sign-btn')) {
        console.log('%c SIGN IN', 'color: red;');
    }
    if (target.closest('.header__arrow-down')) {
        registrationLinkBox.style.top = '50px';
        registrationLinkBox.style.zIndex = 1;
    }
    if (!target.classList.contains('header__arrow-down') && !target.closest('path')) {
        registrationLinkBox.style.top = '0px';
        registrationLinkBox.style.zIndex = -1;
    }
});
