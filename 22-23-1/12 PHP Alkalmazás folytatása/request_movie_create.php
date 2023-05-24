<?php
// CRUD
// >Create
//  Read
//  Update
//  Delete

require_once 'functions.php';
session_start();

if(!isset($_SESSION['user']) || !is_admin($_SESSION['user'])) redirect('index.php'); //☺ 

$form_data = [
    'title' => trim($_GET['title'] ?? ''),
    'year' => trim($_GET['year'] ?? 0),
    'director' => trim($_GET['director'] ?? '')
];

// nem üres
// szám
// ...

$db = db_connect('movies.db');
db_query($db, 'insert into movies (title, year, director) values (:title, :year, :director)', $form_data);
redirect('index.php');