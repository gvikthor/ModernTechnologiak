<?php
require_once "functions.php";

session_start();
if(isset($_SESSION["logged_in"])){
    redirect("index.php");
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
</body>
</html>