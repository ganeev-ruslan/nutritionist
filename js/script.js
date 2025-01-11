
document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".btn-command");
  const imageContainers = document.querySelectorAll(".cards");

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      // Удаляем класс active у всех кнопок
      buttons.forEach((btn) => btn.classList.remove("active"));
      // Добавляем класс active к текущей кнопке
      this.classList.add("active");

      // Получаем категорию из data-атрибута
      const category = this.getAttribute("data-category");

      // Скрываем все контейнеры с изображениями и показываем только нужный
      imageContainers.forEach((container) => {
        if (container.classList.contains(category)) {
          container.style.display = "flex"; // Показываем контейнер с нужной категорией
        } else {
          container.style.display = "none"; // Скрываем остальные
        }
      });
    });
  });

  // Инициализация: показываем первый контейнер и устанавливаем первую кнопку как активную
  // Эта часть кода больше не нужна, так как мы уже установили активное состояние в HTML
});

const priceGridContainer = document.querySelector(".price-grid-container");

let startX, endX;

priceGridContainer.addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX; // Запоминаем начальную позицию касания
});

priceGridContainer.addEventListener("touchmove", (e) => {
  endX = e.touches[0].clientX; // Запоминаем текущую позицию касания
});

priceGridContainer.addEventListener("touchend", () => {
  const diffX = startX - endX; // Разница между начальной и конечной позицией

  if (Math.abs(diffX) > 50) {
    // Если разница больше 50px, считаем это свайпом
    if (diffX > 0) {
      priceGridContainer.scrollBy({ left: 100, behavior: "smooth" }); // Свайп влево
    } else {
      priceGridContainer.scrollBy({ left: -100, behavior: "smooth" }); // Свайп вправо
    }
  }
});

document.querySelectorAll(".active-button").forEach((button) => {
  let isOpen = false; // Флаг для отслеживания текущего состояния кнопки

  button.addEventListener("click", function () {
    const paragraph = this.parentElement.nextElementSibling;
    const svgIcon = this.querySelector("svg"); // Получаем текущий SVG-элемент

    if (!isOpen) {
      // Меняем SVG на крестик
      svgIcon.innerHTML = `
                <rect width="48" height="48" rx="6" fill="#234338"/>
                <path d="M19.5364 18.2636C19.1849 17.9121 18.6151 17.9121 18.2636 18.2636C17.9121 18.6151 17.9121 19.1849 18.2636 19.5364L22.7272 24L18.2636 28.4636C17.9121 28.8151 17.9121 29.3849 18.2636 29.7364C18.6151 30.0879 19.1849 30.0879 19.5364 29.7364L24 25.2728L28.4636 29.7364C28.8151 30.0879 29.3849 30.0879 29.7364 29.7364C30.0879 29.3849 30.0879 28.8151 29.7364 28.4636L25.2728 24L29.7364 19.5364C30.0879 19.1849 30.0879 18.6151 29.7364 18.2636C29.3849 17.9121 28.8151 17.9121 28.4636 18.2636L24 22.7272L19.5364 18.2636Z" fill="white"/>
            `;

      // Показываем текст
      paragraph.classList.remove("hidden");
      paragraph.classList.add("show");

      isOpen = true; // Устанавливаем флаг в true
    } else {
      // Меняем SVG обратно на плюс
      svgIcon.innerHTML = `
                <rect width="48" height="48" rx="6" fill="#234338"/>
                <path d="M24.9008 17.6998C24.9008 17.2027 24.4978 16.7998 24.0008 16.7998C23.5037 16.7998 23.1008 17.2027 23.1008 17.6998V23.0998H17.7008C17.2037 23.0998 16.8008 23.5027 16.8008 23.9998C16.8008 24.4969 17.2037 24.8998 17.7008 24.8998L23.1008 24.8998V30.2998C23.1008 30.7969 23.5037 31.1998 24.0008 31.1998C24.4978 31.1998 24.9008 30.7969 24.9008 30.2998V24.8998H30.3008C30.7978 24.8998 31.2008 24.4969 31.2008 23.9998C31.2008 23.5027 30.7978 23.0998 30.3008 23.0998H24.9008V17.6998Z" fill="white"/>
            `;

      // Скрываем текст
      paragraph.classList.remove("show");
      paragraph.classList.add("hidden");

      isOpen = false; // Снова устанавливаем флаг в false
    }
  });
});


// модальное окно 

