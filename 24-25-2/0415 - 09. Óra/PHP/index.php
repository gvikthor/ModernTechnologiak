<?php

$name = 'Peti';

$animals = ['cat', 'dog', 'fish'];

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Some page</title>
</head>
<body>
    <h1>Szia <?=$name?>!</h1>

    <ul>
    <?php foreach($animals as $animal): ?>
        <li><?=$animal?></li>
    <?php endforeach ?>
    </ul>

    <?= uniqid() ?>
</body>
</html>