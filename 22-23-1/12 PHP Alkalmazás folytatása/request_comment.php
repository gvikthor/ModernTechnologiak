<?php

require_once 'functions.php';
session_start();

if(!isset($_SESSION['user'])) redirect('index.php'); //☺ 

$form_data = [
    'movie_id' => trim($_GET['movie_id'] ?? ''),
    'user_id' => get_userid_by_username($_SESSION['user']),
    'content' => trim($_GET['content'] ?? '')
];

// Egy ember max 5 kommentet írhat egy filmhez
// select * from comments where movie_id = ... and user_id = ...
// count(...) >= 5 redirect

// létezik a film
// nem üres
// ...

$db = db_connect('movies.db');
db_query(
    $db,
    'insert into comments (movie_id, user_id, content) values (:movie_id, :user_id, :content)',
    $form_data
);
$movie_id = $form_data['movie_id'];
redirect("movie_details.php?id=$movie_id");