<?php
require_once 'functions.php';
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