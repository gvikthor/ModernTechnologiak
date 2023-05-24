<?php
// CRUD
//  Create
//  Read
//  Update
// >Delete

require_once 'functions.php';
session_start();

if(!isset($_SESSION['user']) || !is_admin($_SESSION['user'])) redirect('index.php'); //☺ 

$form_data = [
    'id' => trim($_GET['id'] ?? '')
];

// nem üres
// ...

$db = db_connect('movies.db');
db_query(
    $db,
    'DELETE FROM movies WHERE id = :id',
    $form_data
);
redirect('index.php');