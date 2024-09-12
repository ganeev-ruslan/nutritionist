<?php
// Ключ API ВКонтакте
$apiKey = "vk1.a.xf0qoPIexi62adlobhpfOypx93spmAWVBiiINNfNgaAKx3N_TMqYy-bcfh5iJiJqshBMdQN2r1nnIL-qbIEOVSnSKaKLPw8KnDtvEjDzI4k0GkE7sW4KZYnQn85PKlfbbjAnJSTQIxQb332dRgH9Cc1j1NRXQ3S42QEX0wEZjTlp26QttWlskTDEwQF0XIy9vPSbb5G9LMXVd1rikJcsuQ";
// ID группы ВКонтакте
$groupId = "41304908";

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