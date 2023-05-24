<?php
// CRUD
//  Create
// >Read
//  Update
//  Delete
require_once 'functions.php';
require_once 'subpage_comment_list.php';

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

    <!-- innentől kezdődhetne egy sibpage függvény -->
    <div>
        Director: <?=$movie['director']?>
    </div>
    <?php if(is_admin($_SESSION['user'])): ?>
    <div class="description">
        <img width="100px" src="<?=$movie['image']?>">
        <form action="request_movie_update.php">
            <input type="hidden" name="movie_id" value="<?=$movie['id']?>">
            <input name="imgsrc" value="<?=$movie['image']?>"><br>
            <textarea name="description"><?=$movie['description']?></textarea> <br>
            <input type="submit" value="Save changes">
        </form>
    </div>
    <?php else: ?>
    <div class="description">
        <img width="500px" src="<?=$movie['image']?>">
        <div><?=$movie['description']?></div>
    </div>
    <?php endif ?>
    <!-- idáig tartana a subpage függvény -->

    <?php subpage_comment_list($movie['id']) ?>
</body>
</html>