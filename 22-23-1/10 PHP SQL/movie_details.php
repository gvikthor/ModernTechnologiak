<?php
require_once 'functions.php';
$db = db_connect('movies.db');
$movies = db_query(
    $db,
    'select * from movies where id = :id',
    [
        'id' => trim($_GET['id'] ?? 0)
    ]
);
if(count($movies) != 1){
    redirect('index.php');
}
$movie = $movies[0];
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