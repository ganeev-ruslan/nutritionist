$(document).ready(function () {
  $(".hamburger").on("click", function () {
    $(".mobile-menu").addClass("is-active");
  });

  $(".mobile-menu-close").on("click", function () {
    $(".mobile-menu").removeClass("is-active");
  });
});





$(document).ready(function() {
    // Обновление данных о подписчиках и аватарах
    function updateSubscriberData() {
        $.ajax({
            url: 'server.php',
            type: 'GET',
            dataType: 'json',
            success: function(data) {
                // Обновление счетчика
                $('.counter').text(data.count);
                // Обновление аватаров
                $('.avatar').each(function(index) {
                    if (data.avatars[index]) {
                        $(this).css('background-image', 'url(' + data.avatars[index] + ')');
                        $(this).addClass('active');
                    } else {
                        $(this).css('background-image', 'none');
                        $(this).removeClass('active');
                    }
                });
            },
            error: function(error) {
                console.error('Ошибка получения данных:', error);
            }
        });
    }// Вызов обновления при загрузке страницы
updateSubscriberData();

// Обработка кликов по аватарам
$('.avatar').click(function() {
    // Переход на сайт приложения ВКонтакте
    window.location.href = "https://vk.com/app52297614"; // Замените ссылку на ваше приложение
});

// Периодическое обновление данных
setInterval(updateSubscriberData, 30000); // Обновление каждые 30 секунд
});
