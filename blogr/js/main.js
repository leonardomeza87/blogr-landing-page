const d = document;

let isOpen = false;

d.addEventListener("click", (e) => {
  let t = e.target;

  const menuBtn = ".menu-btn",
    menu = ".menu",
    menuLi = ".menu li",
    $menuBtn = d.querySelector(menuBtn),
    $menu = d.querySelector(menu);

  if (t.matches(menuBtn) || t.matches(`${menuBtn} *`)) {
    console.log("a");

    if (isOpen) {
      isOpen = false;
      $menu.classList.toggle("hidden-menu");
    } else {
      isOpen = true;
      $menu.classList.toggle("hidden-menu");
    }

    let $icons = $menuBtn.querySelectorAll("img");
    $icons.forEach((el) => {
      el.classList.toggle("hidden");
    });
  }

  if (t.matches(menuLi) || t.matches(`${menuLi} *`)) {
    console.log("b");

    console.log(t);

    let selectedMenu = t.getAttribute("data-menu");

    if (selectedMenu === "0") {
      d.getElementById("menu0").classList.toggle("hidden");
      d.getElementById("link0").classList.toggle("active");
    } else if (selectedMenu === "1") {
      d.getElementById("menu1").classList.toggle("hidden");
      d.getElementById("link1").classList.toggle("active");
    } else if (selectedMenu === "2") {
      d.getElementById("menu2").classList.toggle("hidden");
      d.getElementById("link2").classList.toggle("active");
    }
    // if (isOpen) {
    //   isOpen = false;
    //   $menu.classList.toggle("hidden");
    // } else {
    //   isOpen = true;
    //   $menu.classList.toggle("hidden");
    // }

    // let $icons = $menuBtn.querySelectorAll("img");

    // $icons.forEach((el) => {
    //   el.classList.toggle("hidden");
    // });
  }
});
