<?php
// CRUD
//  Create
//  Read
// >Update
//  Delete

require_once 'functions.php';
session_start();

if(!isset($_SESSION['user']) || !is_admin($_SESSION['user'])) redirect('index.php'); //☺ 

$form_data = [
    'movie_id' => trim($_GET['movie_id'] ?? ''),
    'imgsrc' => trim($_GET['imgsrc'] ?? ''),
    'description' => trim($_GET['description'] ?? '')
];

// nem üres
// ...

$db = db_connect('movies.db');
db_query(
    $db,
    'UPDATE movies SET description = :description, image = :imgsrc WHERE id = :movie_id',
    $form_data
);
redirect('index.php');