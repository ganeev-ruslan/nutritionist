

document.querySelectorAll('li a').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Отменяет стандартное поведение ссылки
  
        // Добавляем класс для плавного исчезновения
        document.body.classList.add('fade-out');
  
        // Ждем завершения анимации перед переходом на новую страницу
        setTimeout(() => {
            window.location.href = this.href; // Переход на новую страницу
        }, 250); // Время должно совпадать с временем в CSS (0.5s)
    });
  });


// перестройка блоков в footer 


  
  const block1 = document.querySelector('.logo_nutricionist');
  const block3 = document.querySelector('.arrow_up_block');
  
  function moveContent(){
    if (window.matchMedia("(width<1150px)").matches){
      while (block3.firstChild){
        block1.appendChild(block3.firstChild)
      }
      block3.remove();
    }
  }
  
  moveContent()
  window.addEventListener('resize', moveContent);


//   окрашивание ссылок при  переключении 
document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.menu-nav a');
    const currentPath = window.location.pathname;

    // Удаляем класс active у всех ссылок
    links.forEach(link => {
        link.classList.remove('active');
        
        // Проверяем, является ли текущая ссылка активной
        if (link.href.includes(currentPath)) {
            link.classList.add('active'); // Добавляем класс active к текущей ссылке
        }
    });

    // Добавляем обработчик клика для каждой ссылки
    links.forEach(link => {
        link.addEventListener('click', () => {
            // Удаляем класс active у всех ссылок перед добавлением к текущей
            links.forEach(l => l.classList.remove('active'));
            link.classList.add('active'); // Добавляем класс active к текущей ссылке
        });
    });
});


document.addEventListener('DOMContentLoaded', function() {
  const buttons = document.querySelectorAll('.btn-command');
  const imageContainers = document.querySelectorAll('.image-container');

  buttons.forEach(button => {
      button.addEventListener('click', function() {
          // Удаляем класс active у всех кнопок
          buttons.forEach(btn => btn.classList.remove('active'));
          // Добавляем класс active к текущей кнопке
          this.classList.add('active');

          // Получаем категорию из data-атрибута
          const category = this.getAttribute('data-category');

          // Скрываем все контейнеры с изображениями
          imageContainers.forEach(container => {
              if (container.classList.contains(category)) {
                  container.style.display = 'flex'; // Показываем контейнер с нужной категорией
              } else {
                  container.style.display = 'none'; // Скрываем остальные
              }
          });
      });
  });
});

let swiper = new Swiper(".another-gallery-swiper", {
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