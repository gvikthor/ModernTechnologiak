<?php

$people1 = [
    'László', 'Dalma', 'Nándor', 'Kíra'
];

$people2 = [
    ['László', 'autóversenyző'],
    ['Dalma', 'CEO'],
    ['Nándor', 'háztartásbeli'],
    ['Kíra', 'óvodapedagógus']
];

$people3 = [
    [
        'name' => 'László',
        'job' => 'autóversenyző'
    ],
    [
        'name' => 'Dalma',
        'job' => 'CEO'
    ],
    [
        'name' => 'Nándor',
        'job' => 'háztartásbeli'
    ],
    [
        'name' => 'Kíra',
        'job' => 'óvodapedagógus'
    ]
];

$people4 = [
    (object)[
        'name' => 'László',
        'job' => 'autóversenyző'
    ],
    (object)[
        'name' => 'Dalma',
        'job' => 'CEO'
    ],
    (object)[
        'name' => 'Nándor',
        'job' => 'háztartásbeli'
    ],
    (object)[
        'name' => 'Kíra',
        'job' => 'óvodapedagógus'
    ]
];

$people5 = [
    (object)[
        'name' => 'László',
        'job' => 'autóversenyző',
        'salary' => 123,
        'gender' => 'male',
        'degrees' => [
            'Érettségi',
            'Gépészmérnök BSc',
            'Gépészmérnök MSc'
        ]
    ],
    (object)[
        'name' => 'Dalma',
        'job' => 'CEO',
        'salary' => 456,
        'gender' => 'female',
        'degrees' => [
            'Hauptetwas szak'
        ]
    ],
    (object)[
        'name' => 'Nándor',
        'job' => 'háztartásbeli',
        'salary' => 789,
        'gender' => 'male',
        'degrees' => [
            'Érettségi'
        ]
    ],
    (object)[
        'name' => 'Kíra',
        'job' => 'óvodapedagógus',
        'salary' => 963,
        'gender' => 'female',
        'degrees' => [
            'Érettségi',
            'Óvodapedagógus osztatlan'
        ]
    ],
    (object)[
        'name' => 'Laura',
        'job' => 'óvodapedagógus',
        'salary' => 1450,
        'gender' => 'female',
        'degrees' => [
            'Érettségi',
            'Óvodapedagógus osztatlan'
        ]
    ],
    (object)[
        'name' => 'István',
        'job' => 'programozó',
        'salary' => 1,
        'gender' => 'male',
        'degrees' => [
            'Érettségi',
            'Programtervező infromatikus BSc'
        ]
    ],
    (object)[
        'name' => 'Áron',
        'job' => 'takarítószakember',
        'salary' => 397,
        'gender' => 'male',
        'degrees' => [
            'Érettségi',
            'Programtervező infromatikus BSc',
            'Programtervező infromatikus MSc',
            'Programtervező infromatikus PhD'
        ]
    ]
];

function phpmoneyToHuf($phpamount){
    $multip = 495; //getAmountFromOTPServer()
    return $phpamount * $multip;
}

function avgSalary($people){
    $ppl = count($people);
    $sum = 0;
    foreach($people as $person){
        $sum += $person->salary;
    }

    return $sum/$ppl;
}

function avgSalaryPerDegree($people, $degreeAmount){
    $ppl = count($people);
    $sum = 0;
    foreach($people as $person){
        $sum += $person->salary;
    }

    return $sum/$degreeAmount;
}

$maleAmount = 0;
$femaleAmount = 0;
$degreeAmount = 0;
foreach($people5 as $person){
    if($person->gender == 'male'){
        $maleAmount++;
    }else{
        $femaleAmount++;
    }

    foreach($person->degrees as $degree){
        if($degree != 'Érettségi'){
            $degreeAmount++;
        }
    }
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<style>
    table, tr, th, td{
        border: 1px solid black;
        border-collapse: collapse;
    }
    .green{
        background-color: greenyellow;
    }
    .blue{
        background-color: lightskyblue;
    }
    .male{
        background-color: aqua;
        display: inline-block;
    }
    .female{
        background-color: burlywood;
        display: inline-block;
    }
    </style>
<body>
    <h1>Emberek</h1>

    <h2>Listában</h2>
    <ul>
        <?php foreach($people1 as $person): ?>
            <li><?=$person?></li>
        <?php endforeach ?>
    </ul>

    <h2>Listában foglalkozás</h2>
    <ul>
        <?php foreach($people2 as $person): ?>
            <li><?=$person[0]?> (<?=$person[1]?>)</li>
        <?php endforeach ?>
    </ul>

    <h2>Listában foglalkozás asszociatív tömbbel</h2>
    <ul>
        <?php foreach($people3 as $person): ?>
            <li><?=$person['name']?> (<?=$person['job']?>)</li>
        <?php endforeach ?>
    </ul>

    <h2>Listában foglalkozás objektummal</h2>
    <ul>
        <?php foreach($people4 as $person): ?>
            <li><?=$person->name?> (<?=$person->job?>)</li>
        <?php endforeach ?>
    </ul>

    <h2>Táblázatban foglalkozás objektummal</h2>
    <table>
        <tr>
            <th>Név</th>
            <th>Foglalkozás</th>
        </tr>
        <?php foreach($people4 as $person): ?>
        <tr>
            <td><?=$person->name?></td>
            <td><?=$person->job?></td>
        </tr>
        <?php endforeach ?>
    </table>

    <h2>Táblázatban foglalkozás és egyebek objektummal</h2>
    <table>
        <tr>
            <th>Név</th>
            <th>Foglalkozás</th>
            <th>Fizetés (havi)</th>
            <th>Fizetés (éves, nettó)</th>
            <th>Fizetés (éves, nettó)</th>
            <th>Szakképesítések</th>
        </tr>
        <?php foreach($people5 as $person):?>
            <?php
                $color = 'blue';
                if($person->salary > 500){
                    $color = 'green';
                }
            ?>
            <!--tr class="< ?=$person->salary > 500 ? 'green' : 'blue'?>"-->
            <tr class="<?=$color?>">
                <td><?=$person->name?></td>
                <td><?=$person->job?></td>
                <td><?=$person->salary?>ß</td>
                <td><?=floor(($person->salary * 12) * 0.8)?>ß</td>
                <td><?=phpmoneyToHuf(floor(($person->salary * 12) * 0.8))?>Ft</td>
                <td>
                    <ul>
                        <?php foreach($person->degrees as $degree): ?>
                            <li><?=$degree?></li>
                        <?php endforeach ?>
                    </ul>
                </td>
            </tr>
        <?php endforeach ?>
    </table>
    Az átlag fizetés a baráti körben <?=avgSalary($people5)?>ß <br>
    Az egy szakképesítésre jutó átlag fizetés <?=floor(avgSalaryPerDegree($people5, $degreeAmount))?>ß
    <div>
        <div class="male" style="width: <?=100 * $maleAmount / ($maleAmount + $femaleAmount)?>%;">Férfi: <?=$maleAmount?>db</div>
        <div class="female" style="width: <?=100 * $femaleAmount / ($maleAmount + $femaleAmount)?>%;">Nő: <?=$femaleAmount?>db</div>
    </div>

    <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
</body>
</html>