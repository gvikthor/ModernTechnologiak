<?php
$username = 'Peti';
//var_dump($username);

$numbers = [4, 8, 23, 4, 67, 8];
$peti_assocarray = [
    'name' => 'Peti',
    'age' => 27,
    'friends' => ['Gergő', 'Andi'],
    'home' => [
        'address' => 'Cica utca'
    ]
];
$peti_object = (object)[
    'name' => 'Peti',
    'age' => 27,
    'friends' => ['Gergő', 'Andi'],
    'home' => (object)[
        'address' => 'Cica utca'
    ]
];
$index1 = 'home';
$index2 = 'address';

$index_arr = [
    'i' => 'name'
];
$index_obj = (object)[
    'i' => 'name'
];

$animals = [
    (object)['name' => 'Blöki', 'species' => 'dog'],
    (object)['name' => 'Cirmi', 'species' => 'cat'],
];

// SZORGALMI:
// Generálj egy táblázatot és tedd bele az állatokat. 
// thor@inf.elte.hu , Tárgy: PHP Állatok
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Kezdőoldal</title>
</head>

<body>
    <?= $peti_assocarray[$index1][$index2] ?>! <br>
    <?= $peti_object->$index1->$index2 ?>! <br>

    <?= $peti_assocarray[$index_arr['i']] ?>! <br>
    <?php /*$peti_object->$index_arr->i*/ ?>! <br>
    <?php /*$peti_object->($index_arr->i)*/ ?>

    <h1>Peti állatai</h1>
    <?php
    foreach ($animals as $animal) {
        echo '<div>Állat neve: ' . $animal->name . ' (' . $animal->species .  ') </div>';
    }
    ?>

    <ul>
        <?php foreach ($animals as $animal) : ?>
            <li>Állat neve: <?= $animal->name ?> (<?= $animal->species ?>)</li>
        <?php endforeach ?>
    </ul>
</body>
</html>