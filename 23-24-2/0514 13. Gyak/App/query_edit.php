<?php
// AUTENTIKÁCIÓ
// AUTORIZÁCIÓ
    // van joga ezt a filmet szerkeszteni?

require_once 'database_queries.php';
$form_data = (object)[
    'id' => trim($_POST['id'] ?? ''),
    'title' => trim($_POST['title'] ?? ''),
    'year'  => trim($_POST['year'] ?? 1),
    'description' => trim($_POST['description'] ?? '')
];

/*
    Ellenőrzések
*/

edit_movie(
    $form_data->id,
    $form_data->title,
    $form_data->year,
    $form_data->description
);
redirect('index.php');