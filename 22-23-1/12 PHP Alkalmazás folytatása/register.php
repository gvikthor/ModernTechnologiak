<?php

require_once 'functions.php';
require_once 'subpage_errors.php';

session_start();
$errors = $_SESSION['errors'] ?? [];
$_SESSION['errors'] = [];
$form_data = $_SESSION['form_data'] ?? [];
$_SESSION['form_data'] = [];

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
    <form method="POST" action="request_register.php">
        Username: <input name="username" value="<?=$form_data['username'] ?? ''?>"> <br>
        Password: <input name="password1" type="password"> <br>
        Password again: <input name="password2" type="password"> <br>
        Itt lehetne még egy halom mező, ld. 08. Gyak PHP Űrlapok <br>
        <input type="submit" value="Regisztrál">
    </form>
    <?php subpage_error_list($errors) ?>
</body>
</html>