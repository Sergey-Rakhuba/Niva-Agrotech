const swiperCatalogue = new Swiper(".swiper-catalogue", {
  loop: true,
  //spaceBetween: 50,
  slidesPerView: 1,

  centeredSlides: true,
  autoplay: {
    delay: 5000,
    stopOnLastSlide: true,
    disableOnInteraction: true,
  },
  navigation: {
    nextEl: ".swiper-next",
    prevEl: ".swiper-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
});

const swiper = new Swiper(".swiper", {
  loop: true,
  spaceBetween: 50,
  slidesPerView: 2,

  centeredSlides: true,
  autoplay: {
    delay: 5000,
    stopOnLastSlide: true,
    disableOnInteraction: true,
  },
  navigation: {
    nextEl: ".swiper-next",
    prevEl: ".swiper-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
});
const buttonMenu = document.querySelector(".menu");
const menuWindow = document.querySelector(".burger-menu");
const buttonMenuItem = document.querySelectorAll(".button-menu");
const wrap = document.getElementById("burger-menu__close-btn");
buttonMenu.addEventListener("click", function () {
  menuWindow.classList.add("active");
});

buttonMenuItem.forEach(function (item) {
  item.addEventListener("click", function () {
    menuWindow.classList.remove("active");
  });
});

wrap.addEventListener("click", function () {
  menuWindow.classList.remove("active");
});
