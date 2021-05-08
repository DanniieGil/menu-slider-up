+(function showMenu() {
  var toogle = document.getElementById("visual_menu"),
    nav = document.getElementsByClassName("header-nav")[0],
    cruz = document.getElementById("header-nav-icon");
    menu = document.getElementById("nav");

  cruz.addEventListener("click", () => {
    menu.classList.remove("nav");
    nav.classList.remove("show");
    menu.classList.toggle("header-nav");
    nav.classList.toogle("header-nav");
  });
  if (toogle) {
    toogle.addEventListener("click", () => {
      nav.classList.remove("header-nav");

      nav.classList.toggle("show");
    });
  }
})();
