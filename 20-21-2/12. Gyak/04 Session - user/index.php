<?php
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
    <?php if($logged_in): ?>

        You are logged in 😎🤩🥰😍! Hi <?=$_SESSION["logged_in"]?>!<br>
        <form action="logout.php">
            <input type="submit" value="Logout">
        </form>

    <?php else: ?>

        You are not logged in. <br>
        <form action="login.php" method="POST">
            Username: <input name="uname"> <br>
            Password: <input name="pword" type="password"> <br>
            <input type="submit" value="Login">
        </form>
        <?php if($error != ""): ?>
        <div style="background-color: red;">
            Error: <?=$error?>
        </div>
        <?php endif ?>

    <?php endif ?>
</body>
</html>