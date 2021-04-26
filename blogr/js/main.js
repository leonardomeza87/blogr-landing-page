const d = document,
  menuBtn = ".menu-buttons",
  menu = ".menu",
  menuLink = ".menu-link",
  submenu = ".sub-menu",
  btn = ".btn-container",
  $menuBtn = d.querySelector(menuBtn),
  $menu = d.querySelector(menu),
  $icons = $menuBtn.querySelectorAll("img"),
  $links = d.querySelectorAll(".menu-link");

const closeLinks = (string) => {
  $links.forEach((el) => {
    if (el.getAttribute("data-menu") !== string) {
      el.classList.remove("active");
      el.nextElementSibling.classList.add("hidden");
    }
  });
};

d.addEventListener("click", (e) => {
  let t = e.target;

  if (t.matches(menuBtn) || t.matches(`${menuBtn} *`)) {
    $menu.parentElement.classList.toggle("hidden-menu");

    $icons.forEach((el) => {
      el.classList.toggle("hidden");
    });

    closeLinks(null);
  }

  if (t.matches(menuLink) || t.matches(`${menuLink} * `)) {
    let submenuSelected = t.getAttribute("data-menu");

    d.getElementById(`menu${submenuSelected}`).classList.toggle("hidden");
    d.getElementById(`link${submenuSelected}`).classList.toggle("active");

    closeLinks(submenuSelected);
  }
});
