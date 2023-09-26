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
  slidesPerView: 3,

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
const buttonMenu = document.querySelectorAll(".button-menu");
