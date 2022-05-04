<?php
include_once "functions.php";
session_start();
$LOGGED_IN = session_is_not_empty("user");

$characters = json_decode(file_get_contents("starwars.json"));

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
    <?php if($LOGGED_IN): ?>
        Szia <?=htmlspecialchars($_SESSION["user"])?>!
        <form action="auth_logout.php">
            <input type="submit" value="Kijelentkezés">
        </form>
    <?php else: ?>
        <form action="auth_login.php">
            <input name="username" placeholder="Felhasználónév">
            <input type="password" name="password" placeholder="Jelszó">
            <input type="submit" value="Bejelentkezés">
        </form>
    <?php endif ?>
    <ul>
        <?php foreach($characters as $character): ?>
            <li><?=htmlspecialchars($character)?></li>
        <?php endforeach ?>
    </ul>
    <?php if($LOGGED_IN): ?>
        <form action="add_character.php">
            <input name="newcharacter">
            <input type="submit" value="➕">
        </form>
    <?php endif ?>
</body>
</html>