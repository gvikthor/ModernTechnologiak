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

$search_term = $_GET['search_term'] ?? ''
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
        <form>
            <input name="search_term" value="<?=$search_term?>">
            <input type="submit" value="Search">
        </form>
        <?php subpage_movie_list(get_movies_filtered($search_term), is_admin($_SESSION['user'])) ?>
    <?php else: ?>
        <?php subpage_login_form() ?>
        <?php subpage_error_list($errors) ?>
    <?php endif ?>
</body>
</html>