<?php

session_start();

var_dump($_SESSION);
//$_SESSION["colour"] = "blue";

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Index</title>
</head>
<body>
    <a href="other.php">Set colour</a>
    <?php if(isset($_SESSION["colour"])): ?>
        This users favourite colour is <?=$_SESSION["colour"]?>.
    <?php endif ?>
</body>
</html>