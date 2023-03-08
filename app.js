const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".navbar__menu");
console.log(menu);
console.log(menuLinks);

menu.addEventListener("click", function () {
  menu.classList.toggle("is-active");
  menuLinks.classList.toggle("active");
});
