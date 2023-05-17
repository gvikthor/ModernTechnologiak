<?php
// CRUD
//  Create
// >Read
//  Update
//  Delete
require_once 'functions.php';
session_start();

$movie = [];
try{
    $movie = get_movie_by_id($_GET['id']);
}catch(Exception){
    //error_log('Movie ID did not exist');
    redirect('index.php');
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Movie site - <?=$movie['title']?></title>
</head>
<body>
    <h1>🎥Movie Site</h1>
    <h2><?=$movie['title']?> (<?=$movie['year']?>)</h2>
    <div>
        Director: <?=$movie['director']?>
    </div>
    <div class="description">
        <img width="500px" src="<?=$movie['image']?>">
        <div><?=$movie['description']?></div>
    </div>
</body>
</html>