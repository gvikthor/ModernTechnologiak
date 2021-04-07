<?php

$allVoters = 1576;

$representatives = [
    (object)[
        "name" => "Dalme Dean",
        "freshman" => false,
        "votes" => 495
    ],
    (object)[
        "name" => "Nandow Such",
        "freshman" => false,
        "votes" => 0
    ],
    (object)[
        "name" => "Petyr Borah",
        "freshman" => true,
        "votes" => 700
    ],
    (object)[
        "name" => "Matrino Ago",
        "freshman" => false,
        "votes" => 50
    ],
];

function setColours($people, $maxAmount){
    foreach($people as $person){

        /*
        if($person->freshman){
            $person->colour = "lightblue";
        }else{
            $person->colour = "lightgreen";
        }
        */

        if($person->votes > 200){
            $person->colour = "lightblue";
        }else{
            $person->colour = "lightgreen";
        }

        $person->voteRatio = ($person->votes / $maxAmount);
    }
}

/*
JS-ben így nézne ki:

function setColours(people){
    for(const person of people){
        if(person.freshman){
            person.colour = 'lightblue'
        }else{
            person.colour = 'lightgreen'
        }
    }
}
*/

setColours($representatives, $allVoters);

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Election</title>
</head>
<style>
    table, th, tr, td{
        border: 1px solid black;
        border-collapse: collapse;
    }
</style>
<body>
    <table>
    <thead>
        <tr>
            <th>Name</th>
            <th>Votes</th>
            <th>Vote ratio</th>
        </tr>
    </thead>
    <tbody>
        <?php foreach($representatives as $representative): ?>
            <tr style="background-color: <?=$representative->colour?>;">
                <td><?=$representative->name?></td>
                <td><?=$representative->votes?></td>
                <td><?=100*$representative->voteRatio?>%</td>
            </tr>
        <?php endforeach ?>
    </tbody>
    </table>
</body>
</html>