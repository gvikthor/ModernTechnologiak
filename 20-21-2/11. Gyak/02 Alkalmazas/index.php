<?php
require_once("functions.php");

$db = connect();
$movies = query($db, "SELECT * FROM Movies");

$error = '';
if(isset($_GET["err"])){
    switch($_GET["err"]){
        case 1:
            $error = "Title can't be empty.";
            break;
        case 2:
            $error = "Description can't be empty.";
            break;
        case 3:
            $error = "Release date can't be empty.";
            break;
        case 4:
            $error = "Release date must be a number.";
            break;
        default:
            $error = "Unexpected error!";
    }

    /*if($_GET["err"] == 1){
        $error = "Title can't be empty.";
    }else if($_GET["err"] == 2){

    }*/
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Movies</title>
</head>
<style>
.error{
    background-color: #e83f55;
}
table, td, tr, th{
    border: 1px solid black;
    border-collapse: collapse;
}
td, input{
    width: 200px;
}
td{
    text-align: center;
}
</style>
<body>
    <table>
        <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Release date</th>
        </tr>
        <?php foreach($movies as $movie): ?>
            <tr>
                <td><?=$movie["title"]?></td>
                <td><?=$movie["description"]?></td>
                <td><?=$movie["releasedate"]?></td>
            </tr>
        <?php endforeach ?>
    </table>

    <form method="GET" action="add.php">
        <input name="title">
        <input name="description">
        <input name="releasedate">
        <input type="submit" value="+">
    </form>

    <?php if($error != ""): ?>
        <div class="error">Error: <?=$error?></div>
    <?php endif ?>
</body>
</html>