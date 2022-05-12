<?php
include_once "functions.php";
include_once "db_functions.php";
session_start();
$LOGGED_IN = session_is_not_empty("user");

$characters = db_query(
    db_connect("mtech-hatvan"),
    "select * from starwars"
);
/*foreach($characters2 as $c){
    var_dump($c);
    echo("<br>");
}*/

/*db_query(
    db_connect("mtech-hatvan"),
    "insert into users (`username`, `password`) values (:un, :pw)",
    [
        "un" => "Swfan_1234x",
        "pw" => password_hash("123456", PASSWORD_DEFAULT)
    ]
);*/

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<style>
    .error{
        color: red;
    }
</style>
<body>
    <?php if($LOGGED_IN): ?>
        Szia <?=htmlspecialchars($_SESSION["user"])?>!
        <form action="auth_logout.php">
            <input type="submit" value="Kijelentkezés">
        </form>
    <?php else: ?>
        Regisztráció<br>
        <form action="auth_register.php" method="POST">
            <input name="username" placeholder="Felhasználónév">
            <input type="password" name="password1" placeholder="Jelszó">
            <input type="password" name="password2" placeholder="Jelszó újra">
            <input type="submit" value="Regisztráció">
        </form>
        <?php if(session_is_not_empty("error")): ?>
            <p class="error">Hiba! <?=$_SESSION["error"]?></p>
            <?php $_SESSION["error"] = "" ?>
        <?php endif ?>
        <br>
        Bejelentkezés<br>
        <form action="auth_login.php" method="POST">
            <input name="username" placeholder="Felhasználónév">
            <input type="password" name="password" placeholder="Jelszó">
            <input type="submit" value="Bejelentkezés">
        </form>
    <?php endif ?>
    <ul id="chList">
        <?php foreach($characters as $character): ?>
            <li><?=htmlspecialchars($character["name"])?></li>
        <?php endforeach ?>
    </ul>
    <?php if($LOGGED_IN): ?>
        <div>
            <input id="name">
            <button id="add">➕</button>
        </div>
        <form>
            <input>
            <input>
            <input>
            <input>
        </form>
        <script src="script.js"></script>
    <?php endif ?>
</body>
</html>