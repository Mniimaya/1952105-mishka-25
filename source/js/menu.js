const handlerMenu = function() {
  const button = document.querySelector('.header__toggle--open');
  const menu = document.querySelector('.header-sub');

  button.addEventListener('click', function(e) {

    if(e.target.classList.contains('header__toggle--close')) {
      button.classList.remove('header__toggle--close');
      button.classList.add('header__toggle--open');
      menu.classList.remove('header-sub--opened');
      document.body.classList.remove('lock');
      return;
    }

    button.classList.add('header__toggle--close');
    button.classList.remove('header__toggle--open');
    menu.classList.add('header-sub--opened');
    document.body.classList.add('lock');
  })
}

handlerMenu();
