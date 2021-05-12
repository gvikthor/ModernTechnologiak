<?php
require_once "functions.php";

session_start();
if(isset($_SESSION["logged_in"])){
    redirect("index.php");
}
$errors = [];
if(isset($_SESSION["errors"]) && count($_SESSION["errors"]) > 0){
    $errors = $_SESSION["errors"];
    $_SESSION["errors"] = [];
}

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
    .errors{
        font-weight: bolder;
        color: red;
    }
</style>
<body>
    <h1>Register now!</h1>
    <form method="POST" action="register.php">
        <h2>Username</h2>
        <input name="uname">

        <h2>Password</h2>
        <input name="pword1" type="password">

        <h2>Password again</h2>
        <input name="pword2" type="password">

        <br>

        <input type="submit" value="Register">
    </form>
    <?php if(count($errors) > 0): ?>
        <ul class="errors">
            <?php foreach($errors as $error): ?>
                <li><?=$error?></li>
            <?php endforeach ?>
        </ul>
    <?php endif ?>
</body>
</html>