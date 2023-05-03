<?php
    /*$password = 'Jelszo123,.';
    $hashed_password = password_hash($password, PASSWORD_DEFAULT);
    var_dump(
        preg_match('/[a-zöüóőúéáűíä]/', $password) &&
        preg_match('/[A-ZÖÜÓŐÚÉÁŰÍÄ]/', $password) &&
        preg_match('/[0-9]/', $password) &&
        preg_match('/[^\w]/', $password)
    );

    var_dump($hashed_password);
    var_dump(password_verify($password, $hashed_password));*/

    $movies = json_decode(file_get_contents('movies.json'));
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Movies page</h1>
    <h2>Add new movie</h2>
    <form method="POST" action="add_movie.php">
        Film: <input name="movie"> <br>
        Jelszó: <input name="password" type="password"> <br>
        <input type="submit" value="➕">
    </form>
    <h2>Movie list</h2>
    <ul>
        <?php foreach($movies as $movie): ?>
            <li><?=$movie?></li>
        <?php endforeach ?>
    </ul>
</body>
</html>