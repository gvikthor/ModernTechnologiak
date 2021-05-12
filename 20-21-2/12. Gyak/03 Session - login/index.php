<?php
session_start();
$logged_in = isset($_SESSION["logged_in"]);
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
    <?php if($logged_in): ?>
        You are logged in 😎🤩🥰😍! <br>
        <form action="logout.php">
            <input type="submit" value="Logout">
        </form>
    <?php else: ?>
        You are not logged in. <br>
        <form action="login.php">
            <input type="submit" value="Login">
        </form>
    <?php endif ?>
</body>
</html>