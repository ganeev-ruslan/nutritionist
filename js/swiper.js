let swiper = new Swiper(".another-swiper", {
    slidesPerView: 1,
    spaceBetween: 10,
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
        slidesPerView: 2,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },
  });