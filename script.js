let BurgerMenuIcon = document.querySelector("#burger_menu_icon");
let BurgerMenu = document.querySelector("#burger_menu");
let CloseIcon = document.querySelector("#close_icon");
const MenuLinks = document.querySelectorAll("#burger_menu a");

BurgerMenuIcon.addEventListener("click", () => {
  BurgerMenu.classList.remove(
    "opacity-0",
    "-translate-y-5",
    "pointer-events-none",
  );

  BurgerMenu.classList.add("opacity-100", "translate-y-0");

  BurgerMenuIcon.classList.add("hidden");
  CloseIcon.classList.remove("hidden");
});

CloseIcon.addEventListener("click", () => {
  BurgerMenu.classList.add(
    "opacity-0",
    "-translate-y-5",
    "pointer-events-none",
  );

  BurgerMenu.classList.remove("opacity-100", "translate-y-0");

  CloseIcon.classList.add("hidden");
  BurgerMenuIcon.classList.remove("hidden");
});

MenuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    BurgerMenu.classList.add(
      "opacity-0",
      "-translate-y-5",
      "pointer-events-none",
    );

    BurgerMenu.classList.remove("opacity-100", "translate-y-0");

    CloseIcon.classList.add("hidden");
    BurgerMenuIcon.classList.remove("hidden");
  });
});
