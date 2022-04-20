<?php

$alma = "Alma";
$alma .= "fa";

$tomb = [13, 6, "Alma", true];
/*foreach($tomb as $elem){
    echo var_dump($elem);
}*/

$ember_asszociativtomb = [
    "nev" => "Áron",
    "szin" => "red"
];
$ember_objektum = (object)[
    "nev" => "Áron",
    "szin" => "red"
];
var_dump($ember_asszociativtomb["nev"]);
var_dump($ember_objektum->nev);

$emberek = [
    [
        "nev" => "Áron",
        "szin" => "red",
        "kor" => 15
    ],
    [
        "nev" => "Áron2",
        "szin" => "blue",
        "kor" => 16
    ],
    [
        "nev" => "Áron3",
        "szin" => "green",
        "kor" => 17
    ],
    [
        "nev" => "Áron4",
        "szin" => "orange",
        "kor" => 14
    ]
];

// logikai ? 'értékhaigaz' : 'értékhahamis'

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
    Alma
    <ul>
        <li><?=$alma?></li>
        <?php foreach($tomb as $elem): ?>
            <li><?=$elem?></li>
        <?php endforeach ?>
    </ul>

    <h1>Emberek</h1>
    <ul>
        <?php foreach($emberek as $ember): ?>
            <li style="color: <?=$ember["szin"]?>;"><?=$ember["nev"]?></li>
        <?php endforeach ?>
    </ul>

    <h1>Színek</h1>
    <table>
        <tr>
            <th>Név</th>
            <th>Életkor</th>
        </tr>
        <?php foreach($emberek as $ember): ?>
            <?php $szin = $ember["kor"] < 16 ? $ember["szin"] : 'black'; ?>
            <tr>
                <!-- < ?php if($ember["kor"] < 16): ?>
                    <td style="color: < ?=$ember["szin"]?>;">< ?=$ember["nev"]?></td>
                < ?php else: ?>
                    <td>< ?=$ember["nev"]?></td>
                < ?php endif ?> -->
                <!-- <td < ?= $ember["kor"] < 16 ? 'style="color: '. $ember["szin"] . ';"' : '' ?>>< ?=$ember["nev"]?></td> -->
                
                <td style="color: <?=$szin?>;"><?=$ember["nev"]?></td>
                <td><?=$ember["kor"]?></td>
            </tr>
        <?php endforeach ?>
    </table>
</body>
<script></script>
</html>