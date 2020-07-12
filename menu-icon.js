const icon = document.querySelector(".js-icon");
const menu = document.querySelector(".menu-clicked");

function handleClick(event) {
  menu.classList.toggle("showing");
}

function init() {
  icon.addEventListener("click", handleClick);
}

init();
