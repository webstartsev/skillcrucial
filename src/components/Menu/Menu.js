const toogleMenu = document.querySelector(`.MenuToggle`);
const menu = document.querySelector(`.Menu`);

toogleMenu.addEventListener(`click`, function() {
  menu.classList.toggle(`Menu_show`);
  toogleMenu.classList.toggle(`MenuToggle_active`);
});
