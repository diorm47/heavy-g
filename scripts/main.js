// search mode

document.addEventListener("DOMContentLoaded", function () {
  const searchIcon = document.querySelector(
    'img[src="./assets/icons/search.png"]'
  );
  const searchMode = document.querySelector(".search_mode");
  const closeBtn = document.querySelector(".searchmode_close img");
  const searchModeWrapper = document.querySelector(".search_mode_wrapper");
  function openSearchMode() {
    searchMode.style.display = "block";
    document.body.style.overflow = "hidden";
  }
  function closeSearchMode() {
    searchMode.style.display = "none";
    document.body.style.overflow = "";
  }
  searchIcon.addEventListener("click", openSearchMode);
  closeBtn.addEventListener("click", closeSearchMode);
  searchMode.addEventListener("click", function (event) {
    if (!searchModeWrapper.contains(event.target)) {
      closeSearchMode();
    }
  });
});

// fixed nav
document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    const elementOffset = document.querySelector(".main_nav_bar");

    const scrollPosition = window.scrollY;

    const nav_wrapper = this.document.querySelector(".main_nav_bar");
    if (scrollPosition > 130) {
      nav_wrapper.classList.add("sticked_nav_bar");
    }
    if (scrollPosition < 130) {
      nav_wrapper.classList.remove("sticked_nav_bar");
    }

    if (scrollPosition > 176) {
      nav_wrapper.classList.add("sticked_nav_bar_without_nav");
    }
    if (scrollPosition < 176) {
      nav_wrapper.classList.remove("sticked_nav_bar_without_nav");
    }
  });
});

// to top
document.querySelector(".to_top_btn").onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

// mob menu

document.addEventListener("DOMContentLoaded", function () {
  const menuWrapper = document.querySelector(".mob_menu_wrapper");
  const menuOpenButton = document.querySelector(".mob_menu_open_btn");
  const menuCloseButton = document.querySelector(".mob_menu_close_btn");
  const overlay = document.querySelector(".mob_menu_wrapper_overlay");

  overlay.addEventListener("click", function () {
    menuWrapper.classList.remove("mob_menu_wrapper_visible");
    menuOpenButton.classList.remove("dn");
    menuCloseButton.classList.add("dn");
  });

  menuOpenButton.addEventListener("click", function () {
    menuWrapper.classList.add("mob_menu_wrapper_visible");
    menuOpenButton.classList.add("dn");
    menuCloseButton.classList.remove("dn");
  });

  menuCloseButton.addEventListener("click", function () {
    menuWrapper.classList.remove("mob_menu_wrapper_visible");
    menuOpenButton.classList.remove("dn");
    menuCloseButton.classList.add("dn");
  });
});

// mob menu dropdown
document.addEventListener("DOMContentLoaded", function () {
  const menuItems = document.querySelectorAll(".mob_menu_list_item");

  menuItems.forEach((item) => {
    const opener = item.querySelector(".mob_menu_list_item_opener");

    opener.addEventListener("click", function () {
      if (item.classList.contains("mob_menu_list_item_active")) {
        item.classList.remove("mob_menu_list_item_active");
      } else {
        menuItems.forEach((menuItem) => menuItem.classList.remove("active"));
        item.classList.add("mob_menu_list_item_active");
      }
    });
  });
});



const slider = document.querySelector('.products_list_overflow');

let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', () => {
  isDown = false;
  slider.classList.remove('active');
});

slider.addEventListener('mouseup', () => {
  isDown = false;
  slider.classList.remove('active');
});

slider.addEventListener('mousemove', (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 1.5; 
  slider.scrollLeft = scrollLeft - walk;
});


