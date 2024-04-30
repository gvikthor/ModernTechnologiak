<?php
require_once 'functions.php';
$movies = read_json('movies.json');
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="query_add.php" method="POST">
        Title: <input name="title">
        Year: <input name="year">
        <input type="submit">
    </form>
    <table>
        <tr>
            <th>Title</th>
            <th>Year</th>
            <th>Delete</th>
        </tr>
        <?php foreach($movies as $movie): ?>
            <tr>
                <td><?=$movie->title?></td>
                <td><?=$movie->year?></td>
                <td>
                    <a href="query_delete.php?id=<?=$movie->id?>">🚯</a>
                </td>
            </tr>
        <?php endforeach ?>
    </table>
</body>
</html>