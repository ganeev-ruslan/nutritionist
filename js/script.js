document.addEventListener('DOMContentLoaded', function() {
  const buttons = document.querySelectorAll('.btn-command');
  const imageContainers = document.querySelectorAll('.cards');

  buttons.forEach(button => {
      button.addEventListener('click', function() {
          // Удаляем класс active у всех кнопок
          buttons.forEach(btn => btn.classList.remove('active'));
          // Добавляем класс active к текущей кнопке
          this.classList.add('active');

          // Получаем категорию из data-атрибута
          const category = this.getAttribute('data-category');

          // Скрываем все контейнеры с изображениями и показываем только нужный
          imageContainers.forEach(container => {
              if (container.classList.contains(category)) {
                  container.style.display = 'flex'; // Показываем контейнер с нужной категорией
              } else {
                  container.style.display = 'none'; // Скрываем остальные
              }
          });
      });
  });

  // Инициализация: показываем первый контейнер и устанавливаем первую кнопку как активную
  // Эта часть кода больше не нужна, так как мы уже установили активное состояние в HTML
});






