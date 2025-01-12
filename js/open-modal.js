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

document.getElementById("my-modal").addEventListener("click", event => {
    if (event._isClickWithInModal) return;
    event.currentTarget.classList.remove('open')
});








