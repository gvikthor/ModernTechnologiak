<?php
require_once 'database_queries.php';
session_start();


//  autentikáció                 autorizáció
if(!isset($_SESSION['user']) || !$_SESSION['admin']) redirect('index.php');

$form_data = (object)[
    'title' => trim($_POST['title'] ?? ''),
    'year'  => trim($_POST['year'] ?? 1),
    'description' => trim($_POST['description'] ?? '')
];

/*
    Ellenőrzések
*/

add_new_movie(
    $form_data->title,
    $form_data->year,
    $form_data->description
);
//add_new_movie_with_object($form_data);
redirect('index.php');