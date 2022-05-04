<?php

$characters = json_decode(file_get_contents("starwars.json"))

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
    <ul>
        <?php foreach($characters as $character): ?>
            <li><?=htmlspecialchars($character)?></li>
        <?php endforeach ?>
    </ul>

    <form action="add_character.php">
        <input name="newcharacter">
        <input type="submit" value="➕">
    </form>
</body>
</html>