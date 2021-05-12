<?php
require_once "functions.php";
require_once "subpages.php";

session_start();
$logged_in = isset($_SESSION["logged_in"]);

$error = "";
if(isset($_GET["err"])){
    switch($_GET["err"]){
        case 1:
            $error = "Username or password incorrect.";
            break;
        default:
            $error = "Unexpected error!";
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
</head>
<body>
    <?php subpage_login_register($logged_in, $error) ?>
    <?php subpage_movie_list() ?>
</body>
</html>