<?php
require_once 'database_queries.php';
session_start();
$movies = get_all_movies();
$is_logged_in = isset($_SESSION['user']);
$is_admin = $_SESSION['admin'] ?? false;
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php if($is_logged_in): ?>
        <a href="query_logout.php">Logout</a>
    <?php else: ?>
        <a href="login.php">Login</a> <br>
        <a href="register.php">Register</a> <br>
    <?php endif ?>

    <?php if($is_admin): ?>
    <form action="query_add.php" method="POST">
        Title: <input name="title">
        Year: <input name="year">
        Description: <input name="description">
        <input type="submit">
    </form>
    <?php endif ?>
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