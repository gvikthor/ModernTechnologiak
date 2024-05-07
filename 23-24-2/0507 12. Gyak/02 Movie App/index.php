<?php
require_once 'database_queries.php';
$movies = get_all_movies();
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
        Description: <input name="description">
        <input type="submit">
    </form>
    <table>
        <tr>
            <th>Title</th>
            <th>Year</th>
            <th>Description</th>
            <th>Delete</th>
        </tr>
        <?php foreach($movies as $movie): ?>
            <tr>
                <td><a href="movie.php?id=<?=$movie['id']?>"><?=$movie['title']?></a></td>
                <td><?=$movie['year']?></td>
                <td><?=$movie['description']?></td>
                <td>
                    <a href="query_delete.php?id=<?=$movie['id']?>">🚯</a>
                </td>
            </tr>
        <?php endforeach ?>
    </table>
</body>
</html>