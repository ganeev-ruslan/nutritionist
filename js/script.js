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

document.addEventListener("DOMContentLoaded", function () {
  const monthlyButton = document.getElementById("monthly");
  const yearlyButton = document.getElementById("yearly");

  monthlyButton.addEventListener("click", () => {
    changeButtonColor(monthlyButton);
    changeButtonColor(yearlyButton);
  });

  yearlyButton.addEventListener("click", () => {
    changeButtonColor(yearlyButton);
    changeButtonColor(monthlyButton);
  });

  function changeButtonColor(button) {
    if (button.classList.contains("monthly_color")) {
      button.classList.remove("monthly_color");
      button.classList.add("yearly_color");
    } else {
      button.classList.remove("yearly_color");
      button.classList.add("monthly_color");
    }
  }
});

// анимация при переходе на страницу
