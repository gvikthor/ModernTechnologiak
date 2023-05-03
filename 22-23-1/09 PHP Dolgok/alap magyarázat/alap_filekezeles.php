<?php
// $text = file_get_contents('szoveg.txt'); // ./adatok/szovegek/szoveg.txt
// file_put_contents('szoveg.txt', 'Az almafa szépen virágzik a tavaszi napfényben.');

// JSON - JavaScript Object Notation
// https://www.json.org/json-en.html

$text_data = file_get_contents('adat.json');
$array_data = json_decode($text_data); // json decode: szöveget kér paraméterként
$array_data[2]->age = 120;
$text_data = json_encode($array_data, JSON_PRETTY_PRINT); // json encode: bonyolult dolgot kér paraméterként
file_put_contents('adat.json', $text_data);

var_dump($text_data);
var_dump($array_data);

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
    People:
    <ul>
        <?php foreach($array_data as $person): ?>
            <li><?=$person->name?> (<?=$person->age?>)</li>
        <?php endforeach ?>
    </ul>
</body>
</html>