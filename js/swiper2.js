let swiper = new Swiper(".gallery-swiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
      el: ".gallery-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".gallery-btn_next",
      prevEl: ".gallery-btn_prev",
    },
    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1274: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
  });