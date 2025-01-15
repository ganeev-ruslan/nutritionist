document
    .getElementById("open-modal-btn")
    .addEventListener("click", function () {
        document.getElementById("my-modal").classList.add("open");
    });

document
    .getElementById("close-my-modal-btn")
    .addEventListener("click", function () {
        document.getElementById("my-modal").classList.remove("open");
    });


// закрытие модального окна по esc

window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        document.getElementById("my-modal").classList.remove("open")
    }
})


// закрытие модального окна при клике вне его 

document.querySelector("#my-modal .modal__box").addEventListener('click', event => {
    event._isClickWithInModal = true;
});

document.getElementById("my-modal").addEventListener("click", event => {
    if (event._isClickWithInModal) return;
    event.currentTarget.classList.remove('open')
});



document
    .getElementById("open-modal-btn-1")
    .addEventListener("click", function () {
        document.getElementById("my-modal-1").classList.add("open");
    });

document
    .getElementById("close-my-modal-btn-1")
    .addEventListener("click", function () {
        document.getElementById("my-modal-1").classList.remove("open");
    });


// закрытие модального окна по esc

window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        document.getElementById("my-modal-1").classList.remove("open")
    }
})


// закрытие модального окна при клике вне его 

document.querySelector("#my-modal .modal__box").addEventListener('click', event => {
    event._isClickWithInModal = true;
});

document.getElementById("my-modal-1").addEventListener("click", event => {
    if (event._isClickWithInModal) return;
    event.currentTarget.classList.remove('open')
});



document
    .getElementById("open-modal-btn-2")
    .addEventListener("click", function () {
        document.getElementById("my-modal-2").classList.add("open");
    });

document
    .getElementById("close-my-modal-btn-2")
    .addEventListener("click", function () {
        document.getElementById("my-modal-2").classList.remove("open");
    });


// закрытие модального окна по esc

window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        document.getElementById("my-modal-2").classList.remove("open")
    }
})


// закрытие модального окна при клике вне его 

document.querySelector("#my-modal .modal__box").addEventListener('click', event => {
    event._isClickWithInModal = true;
});

document.getElementById("my-modal-2").addEventListener("click", event => {
    if (event._isClickWithInModal) return;
    event.currentTarget.classList.remove('open')
});


// четвертое модальное окно

document
    .getElementById("open-modal-btn-3")
    .addEventListener("click", function () {
        document.getElementById("my-modal-3").classList.add("open");
    });

document
    .getElementById("close-my-modal-btn-3")
    .addEventListener("click", function () {
        document.getElementById("my-modal-3").classList.remove("open");
    });


// закрытие модального окна по esc

window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        document.getElementById("my-modal-3").classList.remove("open")
    }
})


// закрытие модального окна при клике вне его 

document.querySelector("#my-modal .modal__box").addEventListener('click', event => {
    event._isClickWithInModal = true;
});

document.getElementById("my-modal-3").addEventListener("click", event => {
    if (event._isClickWithInModal) return;
    event.currentTarget.classList.remove('open')
});







// function restoreSvgState() { 
//     const svgContainers = document.querySelectorAll('.svg-container'); svgContainers.forEach(svgContainer => { 
//         const id = svgContainer.dataset.id; 
//         const savedColor = localStorage.getItem(id); 
//         if (savedColor) { 
//             svgContainer.style.fill = savedColor; 
//         } 
//     }); 
// } 
// function saveSvgState(button) { 
//     const svgContainer = button.querySelector('.svg-container'); const id = svgContainer.dataset.id; 
//     const currentFill = svgContainer.style.fill; 
//     localStorage.setItem(id, currentFill); 
// } 
// document.addEventListener('DOMContentLoaded', () => { 
//     restoreSvgState(); const buttons = document.querySelectorAll('.block_image'); 
//     buttons.forEach(button => { 
//         button.addEventListener('click', () => { 
//             const svgContainer = button.querySelector('.svg-container'); 
//             if (svgContainer.style.fill === 'red') { 
//                 svgContainer.style.fill = 'white'; 
//             } 
//             else { 
//                 svgContainer.style.fill = 'red'; 
//             } 
//             saveSvgState(button); 
//         }); 
//     }); 
// });






// Функция восстановления состояния SVG по локальному хранилищу
function restoreSvgState() {
    // Находим все контейнеры SVG
    const svgContainers = document.querySelectorAll('.svg-container, .svg-container_2');
  
    svgContainers.forEach(svgContainer => {
      const id = svgContainer.dataset.id;
      const savedColor = localStorage.getItem(id);
      
      if (savedColor) {
        svgContainer.style.fill = savedColor;
      }
    });
  }
  
  // Функция сохранения текущего цвета SVG в локальное хранилище
  function saveSvgState(button) {
    const svgContainer = button.querySelector('.svg-container, .svg-container_2');
    const id = svgContainer.dataset.id;
    const currentFill = svgContainer.style.fill;
    
    localStorage.setItem(id, currentFill);
  }
  
  // Обработчик клика по кнопке
  document.addEventListener('DOMContentLoaded', () => {
    restoreSvgState();
  
    const buttons = document.querySelectorAll('.block_image');
  
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        const svgContainer = button.querySelector('.svg-container, .svg-container_2');
        
        if (svgContainer.classList.contains('svg-container')) {
          // Если это первый тип SVG (.svg-container)
          if (svgContainer.style.fill === 'red') {
            svgContainer.style.fill = 'white';
          } else {
            svgContainer.style.fill = 'red';
          }
        } else {
          // Если это второй тип SVG (.svg-container_2)
          if (svgContainer.style.fill === 'black') {
            svgContainer.style.fill = 'white';
          } else {
            svgContainer.style.fill = 'black';
          }
        }
        
        saveSvgState(button);
      });
    });
  });