<?php
// AUTENTIKÁCIÓ
// AUTORIZÁCIÓ
require_once 'functions.php';
$form_data = (object)[
    'title' => trim($_POST['title'] ?? ''),
    'year'  => trim($_POST['year'] ?? 1)
];

/*
    Ellenőrzések
*/

$form_data->id = uniqid();
add_new_element('movies.json', $form_data);
redirect('index.php');