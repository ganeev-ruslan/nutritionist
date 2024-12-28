const priceGridContainer = document.querySelector(".block-command");

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