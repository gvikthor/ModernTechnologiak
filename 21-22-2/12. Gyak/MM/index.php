<?php
include_once "functions.php";
include_once "db_functions.php";

/*
echo(password_hash("alma", PASSWORD_DEFAULT));
echo "<br>";
echo(password_hash("alma", PASSWORD_DEFAULT));
echo "<br>";
echo(password_hash("alma", PASSWORD_DEFAULT));
echo "<br>";
echo(password_hash("alma", PASSWORD_DEFAULT));
*/

session_start();
$is_logged_in = session_is_not_empty("user");

$characters = json_decode(file_get_contents("starwars.json"));

$db = db_connect("mtech-mm");
$characters2 = db_query($db, "select * from starwars");
//var_dump($characters2);

/*
db_query($db, "insert into users (`user`, `pword`) values (:user, :pword)", [
    "user" => "Laura",
    "pword" => password_hash("alma", PASSWORD_DEFAULT)
]);
*/

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
    <?php if($is_logged_in): ?>
        Szia <?=$_SESSION["user"]?>!
        <form action="auth_logout.php">
            <input type="submit" value="Kijelentkez">
        </form>
    <?php else: ?>
        <form action="auth_register.php" method="POST">
            Felhasználónév: <input name="user"> <br>
            Jelszó: <input type="password" name="pword1"> <br>
            Jelszó újra: <input type="password" name="pword2"> <br>
            <input type="submit" value="Regisztrál">
        </form>
        <form action="auth_login.php" method="POST">
            Felhasználónév: <input name="user"> <br>
            Jelszó: <input type="password" name="pword"> <br>
            <input type="submit" value="Bejelentkez">
        </form>
        <?php if(session_is_not_empty("error")): ?>
            Hiba: <?=$_SESSION["error"]?>
            <?php $_SESSION["error"] = "" ?>
        <?php endif ?>
    <?php endif ?>
    

    

    <ul>
        <?php foreach($characters2 as $character): ?>
            <li>
                <?=htmlspecialchars($character["name"])?>
                <!-- beadandó segítség form>
                    <input type="hidden" name="sorozat" value="< ?=htmlspecialchars($character["name"])?>">
                    <input type="submit" value="+">
                </form-->
            </li>
        <?php endforeach ?>
    </ul>

    <!--ul>
        < ?php foreach($characters as $character): ?>
            <li>< ?=htmlspecialchars($character)?></li>
        < ?php endforeach ?>
    </ul-->

    <?php if($is_logged_in): ?>
        <form action="add_character.php">
            <input name="newcharacter">
            <input type="submit" value="➕">
        </form>
    <?php endif ?>
</body>
</html>