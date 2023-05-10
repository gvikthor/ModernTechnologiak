<?php
require_once 'functions.php';
$db = db_connect('movies.db');
$movies = db_query($db, 'select * from movies');
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Movie site</title>
</head>
<body>
    <table>
        <tr>
            <th>Title</th>
            <th>Year</th>
            <th>Director</th>
        </tr>
        <?php foreach($movies as $movie): ?>
        <tr>
            <td>
                <a href="movie_details.php?id=<?=$movie['id']?>">
                <?=$movie['title']?>
                </a>
            </td>
            <td><?=$movie['year']?></td>
            <td><?=$movie['director']?></td>
        </tr>
        <?php endforeach ?>
        <tr>
            <form action="add_movie.php">
                <td><input name="title"></td>
                <td><input name="year"></td>
                <td><input name="director"></td>
                <td><input type="submit" value="➕"></td>
            </form>
        </tr>
    </table>
</body>
</html>