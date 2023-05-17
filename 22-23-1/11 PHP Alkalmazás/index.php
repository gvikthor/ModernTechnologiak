<?php
// CRUD
//  Create
// >Read
//  Update
//  Delete
require_once 'functions.php';
require_once 'subpage_movie_list.php';
require_once 'subpage_authentication.php';
require_once 'subpage_errors.php';

session_start();
$errors = $_SESSION['errors'] ?? [];
$_SESSION['errors'] = [];

$is_logged_in = isset($_SESSION['user']);
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Movie site</title>
</head>
<body>
    <?php if($is_logged_in): ?>
        <h1>Szia <?=$_SESSION['user']?>!</h1>
        <?php subpage_logout_form() ?>
        <?php subpage_movie_list(get_all_movies()) ?>
    <?php else: ?>
        <?php subpage_login_form() ?>
        <?php subpage_error_list($errors) ?>
    <?php endif ?>
</body>
</html>