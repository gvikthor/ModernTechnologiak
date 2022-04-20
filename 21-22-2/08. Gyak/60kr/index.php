<?php
    //echo 'Alma';
    function bool_to_string($bool){
        /*if($bool) return 'igaz';
        else return 'hamis';*/
        return $bool ? 'igaz' : 'hamis';
    }

    $apple = 'Alma';
    echo bool_to_string(false);

    $array = [0, true, 'Budapest', '', ' ', '0'];
    //print_r($array);
    //var_dump($array);
    //$apple = $orange;

    for($i = 0; $i < count($array); $i++){
        echo bool_to_string($array[$i]) . ' ';
        //.=
    }

    //for(const elem of tomb)
    foreach($array as $elem){
        echo $elem . '<br>';
    }

    $people = [
        (object)[
            'name' => 'Áron',
            'age' => 22,
            'favourite_color' => 'pink'
        ],
        (object)[
            'name' => 'Gergő',
            'age' => 25,
            'favourite_color' => 'blue'
        ],
        (object)[
            'name' => 'Attila',
            'age' => 18,
            'favourite_color' => 'red'
        ],
        (object)[
            'name' => 'Peti',
            'age' => 15,
            'favourite_color' => 'green'
        ]
    ];

    $person1 = [
        'name' => 'Áron',
        'age' => 22,
        'favourite_color' => 'pink'
    ];
    echo $person1['name'];
    var_dump($person1);

    $person2 = (object)[
        'name' => 'Áron',
        'age' => 22,
        'favourite_color' => 'pink'
    ];
    echo $person2->name;

    var_dump($person2);
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
        <li>Körte</li>
        <li><?=$apple?></li>
        <?php foreach($array as $elem): ?>
            <li><?=$elem?></li>
        <?php endforeach ?>
    </ul>

    <h1>Emberek</h1>
    <h2>Lista</h2>

    <ul>
        <?php foreach($people as $person): ?>
            <li style="color: <?=$person->favourite_color?>;"><?=$person->name?></li>
        <?php endforeach ?>
    </ul>

    <h2>Táblázat</h2>
    <table>
        <tr>
            <th>Név</th>
            <th>Életkor</th>
        </tr>
        <?php foreach($people as $person):
            $color = $person->age < 20 ? $person->favourite_color : 'white'; ?>

            <tr style="background-color: <?=$color?>;">
                <td><?=$person->name?></td>
                <td><?=$person->age?></td>
            </tr>
        <?php endforeach ?>
    </table>
</body>
</html>