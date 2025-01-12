document.getElementById('application-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Отменяем стандартную отправку формы

    const form = this;
    const nameInput = form.querySelector('#name');
    const emailInput = form.querySelector('#email');
    const phoneInput = form.querySelector('#phone');
    const messageInput = form.querySelector('#message');

    let isValidForm = true;

    // Проверка имени
    if (nameInput.value.trim().length === 0) {
        setErrorFor(nameInput, 'Пожалуйста, укажите Ваше имя.');
        isValidForm = false;
    } else {
        clearErrorFor(nameInput);
    }

    // Проверка email
    if (!isValidEmail(emailInput.value)) {
        setErrorFor(emailInput, 'Пожалуйста, введите правильный email.');
        isValidForm = false;
    } else {
        clearErrorFor(emailInput);
    }

    // Проверка телефона
    if (!isValidPhone(phoneInput.value)) {
        setErrorFor(phoneInput, 'Пожалуйста, введите правильный номер телефона.');
        isValidForm = false;
    } else {
        clearErrorFor(phoneInput);
    }

    // Проверка сообщения
    if (messageInput.value.trim().length === 0) {
        setErrorFor(messageInput, 'Пожалуйста, напишите сообщение.');
        isValidForm = false;
    } else {
        clearErrorFor(messageInput);
    }

    if (isValidForm) {
        // Данные валидны, можно отправлять на сервер
        console.log(`Имя: ${nameInput.value}, Email: ${emailInput.value}, Телефон: ${phoneInput.value}, Сообщение: ${messageInput.value}`);
    }
});

// Функция для установки ошибки
function setErrorFor(input, message) {
    const formControl = input.parentNode;
    const small = formControl.querySelector('small');
    if (small) {
        small.textContent = message;
    } else {
        const errorMessage = document.createElement('small');
        errorMessage.className = 'error';
        errorMessage.textContent = message;
        formControl.appendChild(errorMessage);
    }
}

// Функция для очистки ошибки
function clearErrorFor(input) {
    const formControl = input.parentNode;
    const errorMessage = formControl.querySelector('.error');
    if (errorMessage) {
        errorMessage.remove();
    }
}

// Функция для проверки email
function isValidEmail(email) {
    const re = /^(([^<>()[$$\\.,;:\s@"]+(\.[^<>()[$$\\.,;:\s@"]+)*)|(".+"))@(($$[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}$$)|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

// Функция для проверки телефона
function isValidPhone(phone) {
    const re = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;
    return re.test(phone);
}


ymaps.ready(init);

function init() {
    // Координаты вашего адреса
    var myCoordinates = [55.744450, 37.613072]; // Пример координат Москвы

    // Настройка карты
    var myMap = new ymaps.Map('yandex-map', {
        center: myCoordinates,
        zoom: 12,
        controls: ['zoomControl']
    });

    // Установка маркера на карте
    var myPlacemark = new ymaps.Placemark(myCoordinates, {
        hintContent: 'Диетолог',
        balloonContent: 'улица Серафимовича, 2'
    }, {
        
    });
    myMap.geoObjects.add(myPlacemark);

}
