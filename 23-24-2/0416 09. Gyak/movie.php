<?php
    require_once 'functions.php';

    $movies = get_movies();
    $movie_index = trim($_GET['movie_index'] ?? null);
    $error = '';

    if(strlen($movie_index) == 0) {
        $error = 'Movie index is required!';
    } else if (!is_numeric($movie_index)) {
        $error = 'Movie index is not a number!';
    } else if(intval($movie_index) != floatval($movie_index)){
        $error = 'Movie index is not an integer!';
    } else {
        $movie_index = intval($movie_index);
        if ($movie_index >= count($movies)) {
            $error = 'Movie index too great!';
        } else if ($movie_index < 0) {
            $error = 'Movie index too small!';
        }
    }

    /*
    $movie_index = -1;
    if(!empty($_GET['movie_index'])){
        $movie_index = $_GET['movie_index'];
    }
    */
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Movie</title>
</head>

<body>
    <?php if (strlen($error)) : ?>
        <h1><?= $error ?></h1>
    <?php else : ?>
        <h1><?= $movies[$movie_index]->title ?></h1>
        <div>
            <?= $movies[$movie_index]->desc ?>
        </div>
    <?php endif ?>
</body>

</html>