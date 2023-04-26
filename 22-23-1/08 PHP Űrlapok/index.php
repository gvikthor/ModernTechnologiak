<?php
$friends = [
    [
        'name' => 'Steve',
        'animals' => [
            'dog',
            'cat'
        ]
    ],
    [
        'name' => 'Peter',
        'animals' => [
            'cat'
        ]
    ],
    [
        'name' => 'George',
        'animals' => [
            'dog'
        ]
    ],
    [
        'name' => 'Laure',
        'animals' => [
            'fish',
            'cat'
        ]
    ]
];

//isset($_GET['animals'])

$something = $something_else ?? 'default value';
// ha a baloldal létezik (nem null), akkor az lesz az érték,
// egyébként a jobboldali alapértelmezett

$animal = strtolower(trim($_GET['animal'] ?? ''));
//$animal = strtolower(trim($_POST['animal'] ?? ''));

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
    <form method="GET" action="index.php">
        <input name="animal">
        <input type="submit" value="Search">
    </form>

    Kétféle kérést fogunk nézni:
    <ul>
        <li>GET: fent vannak az url-ben a kérdőjel után</li>
        <li>POST</li>
    </ul>
    
    A kérés tartalma:
    <div>GET: <?php var_dump($_GET) ?></div>
    <div>POST: <?php var_dump($_POST) ?></div>

    <h2>Which friends have <?=$animal?>?</h2>
    <ul>
        <?php foreach($friends as $friend): ?>
            <?php if($animal == '' || in_array($animal, $friend['animals'])): ?>
                <li><?=$friend['name']?></li>
            <?php endif ?>
        <?php endforeach ?>
    </ul>
</body>
</html>