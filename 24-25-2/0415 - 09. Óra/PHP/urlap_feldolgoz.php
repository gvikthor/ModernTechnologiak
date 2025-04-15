<?php


$content = file_get_contents('userek.json');
$users = json_decode($content);

$id = uniqid();
$users->$id = (object)[
    "id" => $id,
    "familyname" => htmlspecialchars($_GET['familyname'] ?? ''),
    "givenname" => htmlspecialchars($_GET['givenname'] ?? ''),
    "favcolour" => htmlspecialchars($_GET['favcolour'] ?? ''),
];

$content = json_encode($users, JSON_PRETTY_PRINT);
file_put_contents('userek.json', $content);

header('Location: urlap.php');

/*
Ez a php-n kívülre menne
<ul>
    <li><?= htmlspecialchars($_GET['familyname'] ?? '') ?></li>
    <li><?= htmlspecialchars($_GET['givenname'] ?? '') ?></li>
    <li><?= htmlspecialchars($_GET['favcolour'] ?? '') ?></li>
</ul>
*/

?>