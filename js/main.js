const burgerBtn = document.querySelector('.header__burger-icon')
const closeNavBtn = document.querySelector('.nav-mobile__close-icon')
const mobileNav = document.querySelector('.nav-mobile')
const allNavItems = document.querySelectorAll('.nav__link')

const handleNav = () => {
    mobileNav.classList.toggle('nav-mobile--active')

    allNavItems.forEach(item => {
		item.addEventListener('click', () => {
			mobileNav.classList.remove('nav-mobile--active')
		})
	})

}

burgerBtn.addEventListener('click', handleNav)
closeNavBtn.addEventListener('click', handleNav)
