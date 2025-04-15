<?php
/*
$content = file_get_contents('valami.txt');
$content .= "\nKörtefa";
file_put_contents('valami.txt', $content);
*/

$content = file_get_contents('userek.json');
$users = json_decode($content);

$id = uniqid();
$users->$id = (object)[
    "id" => $id,
    "familyname" => "Kovács",
    "givenname" => "Balázs",
    "favcolour" => "yellow"
];

$content = json_encode($users, JSON_PRETTY_PRINT);
file_put_contents('userek.json', $content);

?>