/*
  - This page was made for the Frontend Mentor challenge (https://www.frontendmentor.io/?ref=challenge)
  - Author: Leonardo Meza (https://github.com/leonardomeza87)
  - Twitter: (https://twitter.com/leonardomeza87)
*/
const d = document,
  w = window,
  menuBtn = ".menu-buttons",
  menu = ".menu",
  menuLink = ".menu-link",
  submenu = ".sub-menu",
  btn = ".btn-container",
  $header = d.querySelector(".header"),
  $nav = d.querySelector("nav"),
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

const mql = w.matchMedia("(min-width: 961px)");

const scrollFixed = () => {
  if (w.scrollY > 300) {
    $header.classList.add("fixed");
  } else {
    $header.classList.remove("fixed");
  }
};

const screenChange = (e) => {
  if (e.matches) {
    $nav.classList.remove("hidden-menu");
    $icons[0].classList.remove("hidden");
    $icons[1].classList.add("hidden");

    d.removeEventListener("scroll", scrollFixed);
    $header.classList.remove("fixed");
  } else {
    $nav.classList.add("hidden-menu");

    d.addEventListener("scroll", scrollFixed);
  }
};

mql.addListener(screenChange);

if (mql.matches) {
  $nav.classList.remove("hidden-menu");
} else {
  $nav.classList.add("hidden-menu");
  d.addEventListener("scroll", scrollFixed);
}

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
