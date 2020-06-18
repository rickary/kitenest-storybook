export default {
    title: "Patterns/Header",
};

const Logo = () =>
    '<a href="/" class="p-header-logo"><svg viewBox="0 0 133 19" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0)"><path d="M62.4517 0.148987H46.845V18.9193H62.7248V14.6344H52.5112V11.6619H61.526V7.37807H52.5112V4.43308H62.4517V0.148987Z" fill="#B0B1AB"/><path d="M18.7316 0.148071H12.2478L0.130005 13.833V18.9184H5.7962V14.4187L7.94795 12.0627L12.3865 18.9184H19.1683L11.8148 7.77864L18.7316 0.148071Z" fill="#B0B1AB"/><path d="M26.5238 0.148987H20.8584V18.9193H26.5238V0.148987Z" fill="#B0B1AB"/><path d="M45.0724 0.148987H28.2943V4.59444H33.8252V18.9193H39.5169V4.59444H45.0724V0.148987Z" fill="#B0B1AB"/><path d="M81.9009 0.175415H79.75V15.2501L68.31 0.175415H66.051V18.9193H68.2291V3.87023L79.6679 18.9193H81.9009V0.175415Z" fill="#B0B1AB"/><path d="M98.6006 0.175415H85.6621V18.9193H98.9527V16.8836H87.8407V10.4572H97.4567V8.39581H87.8407V2.23788H98.6006V0.175415Z" fill="#B0B1AB"/><path d="M109.061 0.0947266C105.11 0.0947266 102.469 1.9972 102.469 4.94165C102.469 11.6616 113.199 9.03904 113.173 13.9653C113.173 15.7579 111.458 16.8547 108.704 16.8547C106.555 16.8547 104.131 15.8939 102.361 14.2062L101.38 16.1337C103.178 17.8198 105.9 18.9986 108.68 18.9986C112.764 18.9986 115.569 16.9904 115.569 13.8568C115.596 7.05533 104.867 9.57325 104.867 4.75441C104.867 3.1741 106.472 2.26347 108.924 2.26347C110.449 2.26347 112.466 2.7192 114.181 3.84461L115.106 1.83584C113.529 0.791668 111.267 0.0947266 109.061 0.0947266Z" fill="#B0B1AB"/><path d="M132.078 0.175415H117.451V2.23788H123.662V18.9193H125.84V2.23788H132.078V0.175415Z" fill="#B0B1AB"/></g><defs><clipPath id="clip0"><rect width="132.208" height="19" fill="white"/></clipPath></defs></svg></a>';
const Nav = () =>
    '<ul class="p-header-nav"><li class="p-header-nav__item">' +
    '<a href="" class="p-header-nav__link">Shop <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 6L10 11L15 6L17 7L10 14L3 7L5 6Z" fill="#B0B1AB"/></svg></a>' +
    '<div class="p-header__sub-nav">' +
    '<ul class="p-header__sub-nav__list">' +
    '<li class="p-header__sub-nav__item"><a href="#" class="p-header__sub-nav__link">Skin care</a></li>' +
    '<li class="p-header__sub-nav__item"><a href="#" class="p-header__sub-nav__link">Hair care</a></li>' +
    '<li class="p-header__sub-nav__item"><a href="#" class="p-header__sub-nav__link">Body</a></li>' +
    "</ul>" +
    "</div>" +
    "</li>" +
    '<li class="p-header-nav__item"><a href="" class="p-header-nav__link">Blog</a></li><li class="p-header-nav__item"><a href="" class="p-header-nav__link">About Us</a></li><li class="p-header-nav__item"><a href="" class="p-header-nav__link">FAQs</a></li></ul>';
const Benefit = () =>
    '<p class="p-header-benefit"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 16.5C21 16.88 20.79 17.21 20.47 17.38L12.57 21.82C12.41 21.94 12.21 22 12 22C11.79 22 11.59 21.94 11.43 21.82L3.53 17.38C3.36968 17.2958 3.23552 17.1692 3.14208 17.014C3.04864 16.8589 2.9995 16.6811 3 16.5V7.5C3 7.12 3.21 6.79 3.53 6.62L11.43 2.18C11.59 2.06 11.79 2 12 2C12.21 2 12.41 2.06 12.57 2.18L20.47 6.62C20.79 6.79 21 7.12 21 7.5V16.5ZM12 4.15L10.11 5.22L16 8.61L17.96 7.5L12 4.15ZM6.04 7.5L12 10.85L13.96 9.75L8.08 6.35L6.04 7.5ZM5 15.91L11 19.29V12.58L5 9.21V15.91ZM19 15.91V9.21L13 12.58V19.29L19 15.91Z" fill="#B0B1AB"/></svg>Free Delivery</p>';
const MiniCart = () =>
    '<a href="" class="u-blank-button p-header-cart"><svg width="24" height="27" viewBox="0 0 24 27" xmlns="http://www.w3.org/2000/svg"><path d="M2.66667 27H21.3333C22.804 27 24 25.7891 24 24.3V9.45C24 9.09196 23.8595 8.74858 23.6095 8.49541C23.3594 8.24223 23.0203 8.1 22.6667 8.1H18.6667V6.75C18.6667 3.02805 15.676 0 12 0C8.324 0 5.33333 3.02805 5.33333 6.75V8.1H1.33333C0.979711 8.1 0.640573 8.24223 0.390524 8.49541C0.140476 8.74858 0 9.09196 0 9.45V24.3C0 25.7891 1.196 27 2.66667 27ZM8 6.75C8 4.5171 9.79467 2.7 12 2.7C14.2053 2.7 16 4.5171 16 6.75V8.1H8V6.75ZM2.66667 10.8H5.33333V13.5H8V10.8H16V13.5H18.6667V10.8H21.3333L21.336 24.3H2.66667V10.8Z"/></svg></a>';

const Trigger = () => '<button class="u-blank-button p-header__nav-trigger js-triggerNav" aria-label="Menu Trigger"><span></span></button>';

export const Header = () => '<header class="p-header">' + Logo() + Nav() + Benefit() + MiniCart() + Trigger() + "</header>";
