<?php
    require_once 'functions.php';
    $movies = get_movies();
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Movies | Start Page</title>
</head>

<body>
    <?php foreach($movies as $index => $movie): ?>
        <a href="movie.php?movie_index=<?=$movie->id?>"><?=$movie->title?></a><br>
    <?php endforeach ?>

    <form action="new_movie.php" method="GET">
        <label for="title">Title</label> <br>
        <input name="title" id="title"> <br>

        <label for="desc">Description</label> <br>
        <textarea name="desc" id="desc"></textarea> <br>

        <!-- Szorgalmi
        Legyen egy megjelenési év mező, ami csak egész szám lehet 1900 és 2024 közt. Kötelező mező, nem lehet üres.
        -->

        <input type="submit">
    </form>
</body>

</html>