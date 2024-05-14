<?php
require_once 'database_queries.php';
session_start();
if(!isset($_SESSION['user'])){
    redirect('login.php');
}

$id = trim($_GET['id'] ?? -1);
$movie = get_movie_by_id($id)[0] ?? null;

if(is_null($movie)){
    redirect('index.php');
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
    <h1><?=$movie['title']?> (<?=$movie['year']?>)</h1>
    <div>
        <?=$movie['description']?>
    </div>

    <!-- ha admin vagy -->
    <hr>
    <br><br>

    <form action="query_edit.php" method="POST">
        <input type="hidden" name="id" value="<?=$movie['id']?>">
        Title: <input name="title" value="<?=$movie['title']?>">
        Year: <input name="year" value="<?=$movie['year']?>">
        Description: <input name="description" value="<?=$movie['description']?>">
        <!--textarea>< ?=$movie['description']?></textarea-->
        <input type="submit">
    </form>
</body>
</html>