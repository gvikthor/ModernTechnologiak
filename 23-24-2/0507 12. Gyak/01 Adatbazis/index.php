<?php
require_once 'functions.php';
$db = db_connect('movieapp');
$movies = db_query($db, 'select * from movies');

highlight_array($movies);

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1><?= $movies[0]['title'] ?></h1>
</body>
</html>