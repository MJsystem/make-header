const menu = document.querySelector(".nav__menu");
const icons = document.querySelector(".nav__icons");
const btn = document.querySelector(".nav__btn");

function handleClick() {
  menu.classList.toggle("gone");
  icons.classList.toggle("gone");
}

function init() {
  btn.addEventListener("click", handleClick);
}

init();
