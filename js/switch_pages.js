// плавное открытие страниц

document.querySelectorAll('a').forEach(link => {
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