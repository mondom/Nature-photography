const burgerBtn = document.querySelector('.header__burger-icon')
const closeNavBtn = document.querySelector('.nav-mobile__close-icon')
const mobileNav = document.querySelector('.nav-mobile')
const allNavItems = document.querySelectorAll('.nav__link')
const footerYear = document.querySelector('.footer__year')

const handleNav = () => {
    mobileNav.classList.toggle('nav-mobile--active')

	document.body.classList.toggle('sticky-body')

    allNavItems.forEach(item => {
		item.addEventListener('click', () => {
			mobileNav.classList.remove('nav-mobile--active')
		})
	})

}

burgerBtn.addEventListener('click', handleNav)
closeNavBtn.addEventListener('click', handleNav)

const handleCurrentYear = () => {
	const year = new Date().getFullYear()
	footerYear.innerText = year
}
handleCurrentYear()