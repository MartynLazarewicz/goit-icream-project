(() => {
  const refs = {
    hamburger: document.querySelector('#hamburger'),
    hamburgerOpen: document.querySelector('.header__content'),
    hamburgerMenuOpen: document.querySelector('.header__mobileMenu'),
    body: document.querySelector('body'),
    navAbout: document.querySelector('#navAbout'),
    navHow: document.querySelector('#navHow'),
    navProducts: document.querySelector('#navProducts'),
    navContact: document.querySelector('#navContact'),
  };

  refs.hamburger.addEventListener('click', toggleModal);
  refs.navAbout.addEventListener('click', toggleModal);
  refs.navHow.addEventListener('click', toggleModal);
  refs.navProducts.addEventListener('click', toggleModal);
  refs.navContact.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.hamburgerOpen.classList.toggle('hamburgerOpen');
    refs.hamburgerMenuOpen.classList.toggle('header__mobileMenu--hidden');
    refs.body.classList.toggle('noScroll');
  }
})();
