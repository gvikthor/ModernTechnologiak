<?php

session_start();

//var_dump($_SESSION);
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
    <a href="other.php?colour=blue">Set to blue</a> <br>
    <a href="other.php?colour=green">Set to green</a> <br>
    <a href="other.php?colour=red">Set to red</a> <br>
    <a href="other.php?colour=yellow">Set to yellow</a> <br>
    <form action="other.php">
        <input name="colour">
        <input type="submit">
    </form>
    
    <?php if(isset($_SESSION["colour"])): ?>
        This users favourite colour is <?=$_SESSION["colour"]?>.
    <?php endif ?>
</body>
</html>