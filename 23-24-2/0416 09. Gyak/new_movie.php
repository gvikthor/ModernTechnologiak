<?php
require_once 'functions.php';
$movies = get_movies();
$form_data = (object)[
    'title' => trim($_GET['title'] ?? null),
    'desc' => trim($_GET['desc'] ?? null)
];

$errors = [];
if(strlen($form_data->title) == 0) {
    $errors[] = 'Title is required!';
} else if (
    in_array(
        $form_data->title,
        array_map(function ($movie) { return $movie->title; }, $movies)
    )
){
    $errors[] = 'Movie title already exists!';
}

if(strlen($form_data->desc) == 0) {
    $errors[] = 'Description is required!';
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php if(count($errors) == 0): ?>
        Movie added ✅
    <?php else: ?>
        <ul>
            <?php foreach($errors as $error): ?>
                <li><?=$error?></li>
            <?php endforeach ?>
        </ul>
    <?php endif ?>
</body>
</html>