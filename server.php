<?php
// Ключ API ВКонтакте
$apiKey = "56a0d92556a0d92556a0d925e255bd2447556a056a0d92530421aa1ad26c594d9825d96";
// ID группы ВКонтакте
$groupId = "52297058";

// Запрос к API ВКонтакте для получения информации о подписчиках
$url = "https://api.vk.com/method/groups.getMembers?group_id=" . $groupId . "&access_token=" . $apiKey . "&fields=photo_200"; 
$response = file_get_contents($url);
$data = json_decode($response);

// Проверка ответа
if (isset($data->response) && $data->response->count > 0) {
    $subscriberCount = $data->response->count;
    // Получение данных о последних подписчиках
    $lastSubscribers = array_slice($data->response->items, 0, 3);

    $lastSubscriberAvatarUrls = [];
    foreach ($lastSubscribers as $subscriber) {
        // Извлечение ссылки на аватар пользователя из ответа API
        if (isset($subscriber->photo_200)) {
            $lastSubscriberAvatarUrls[] = $subscriber->photo_200;
        } else {
            // Если у пользователя нет аватара, используйте стандартный аватар
            $lastSubscriberAvatarUrls[] = "https://vk.com/images/community_40/default.png";
        }
    }

    $lastSubscriberData = [
        'count' => $subscriberCount,
        'avatars' => $lastSubscriberAvatarUrls
    ];
    header('Content-Type: application/json');
    echo json_encode($lastSubscriberData);
} else {
    echo json_encode(['error' => 'Ошибка получения данных']);
}
?>