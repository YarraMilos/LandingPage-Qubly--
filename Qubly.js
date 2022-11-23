
const Header = document.querySelector('.header')
const burgerMenu = document.querySelector('#BurgerMenu')
const Hamb = document.querySelector('#hamb')
const body = document.body

Header.addEventListener('click', HeaderMenuFunction )

function HeaderMenuFunction(event) {
    if (event.target.closest('.hamb')) {
        burgerMenu.classList.toggle('__opened__burger')
        Hamb.classList.toggle('__opened__burger__hamb')
        body.classList.toggle('opened__burger__body__padding')
    }
    if (!event.target.closest('.hamb')) {
        burgerMenu.classList.remove('__opened__burger')
        Hamb.classList.remove('__opened__burger__hamb')
        body.classList.remove('opened__burger__body__padding')
    }

}





































































