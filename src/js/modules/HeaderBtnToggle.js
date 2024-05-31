class HeaderBtnToggle {
  constructor(button) {
    this.burgerButton = button;
    this.body = document.body;
    this.headerNav = document.querySelector('.header__dropdown');
    
    this.burgerButton.addEventListener('click', () => this.toggleMenu());
  }
  
  toggleMenu() {
    this.burgerButton.classList.toggle('is-active');
    this.body.classList.toggle('is-menu-opened');
    this.headerNav.classList.toggle('is-show');
  }
}

document.querySelectorAll('.js-header-toggle').forEach(button => {
  new HeaderBtnToggle(button);
});

export default HeaderBtnToggle;