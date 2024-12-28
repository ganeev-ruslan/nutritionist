document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger");
    const closeButton = document.querySelector(".mobile-menu-close");
    const menu = document.querySelector(".mobile-menu");
  
    // Обработчик открытия меню
    hamburger.addEventListener("click", () => {
      menu.classList.add("open"); // Открытие меню
    });
  
    // Обработчик закрытия меню
    closeButton.addEventListener("click", () => {
      menu.classList.remove("open"); // Закрытие меню
    });
  });