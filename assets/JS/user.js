// open/close menu
const menu = document.querySelector(".menu");
const openMenu = document.querySelector(".open-menu-icon");
const closeMenu = document.querySelector(".close-menu-icon");

openMenu.addEventListener("click", () => {
  menu.classList.replace("-right-72", "right-0");
});
closeMenu.addEventListener("click", () => {
  menu.classList.replace("right-0", "-right-72");
});

// display/hide submenu
const report = document.querySelector(".report");
const submenu = document.querySelector(".submenu");
const caret = document.querySelector(".fa-caret-left");

report.addEventListener("click", () => {
  submenu.classList.toggle("hidden");
  if (caret.classList.contains("fa-caret-left")) {
    caret.classList.replace("fa-caret-left", "fa-caret-down");
  } else if (caret.classList.contains("fa-caret-down")) {
    caret.classList.replace("fa-caret-down", "fa-caret-left");
  }
});
