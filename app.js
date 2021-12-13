const selectors = {
  menu: '[data-nav-menu-contaner]',
  menuButton: '[data-nav-menu-toggle]',
};

const menu = document.querySelector(selectors.menu);
const menuButton = document.querySelector(selectors.menuButton);

const activeMenuClass = 'menu__enabled';
const activeMenuButton = 'menu__button--enable';

if (menuButton && menu) {
  let opened = false;

  const offToggler = (docEvt) => {
    if (
      opened &&
      !docEvt.target.closest(selectors.menu) &&
      !docEvt.target.closest(selectors.menuButton)
    ) {
      toggleMenuOff();
    }
  };

  const toggleMenuOn = () => {
    opened = true;
    document.addEventListener('click', offToggler);
    menu.classList.add(activeMenuClass);
    menuButton.classList.add(activeMenuButton);
  };

  const toggleMenuOff = () => {
    opened = false;
    document.removeEventListener('click', offToggler);
    menu.classList.remove(activeMenuClass);
    menuButton.classList.remove(activeMenuButton);
  };

  menuButton.addEventListener('click', (evt) => {
    if (opened) {
      toggleMenuOff();
    } else {
      toggleMenuOn();
    }
  });
}
