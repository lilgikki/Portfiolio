const navMain = document.getElementById('menu');
const navToggle = document.getElementById('menu-toggle');

const setMenu = () => {
  if (navMain) {
    navMain.classList.remove('main-header--no-js');
    navToggle.addEventListener('click', () => {
      if (navMain.classList.contains('main-header--closed')) {
        navMain.classList.remove('main-header--closed');
        navMain.classList.add('main-header--opened');
      } else {
        navMain.classList.add('main-header--closed');
        navMain.classList.remove('main-header--opened');
      }
    });
  }
};

export {setMenu};
