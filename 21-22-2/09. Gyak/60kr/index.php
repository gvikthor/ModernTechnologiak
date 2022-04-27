<?php

$movies1 = [
    "Bad Guys",
    "Fantastic Beasts",
    "Encanto",
    "Moon Knight"
];

$movies2 = [
    ["Bad Guys", "movie"],
    ["Fantastic Beasts", "movie"],
    ["Boba Fett", "series"],
    ["Encanto", "movie"],
    ["Moon Knight", "series"]
];

$movies3 = [
    [
        "title" => "Bad Guys", 
        "type" => "movie"
    ],
    [
        "title" => "Fantastic Beasts",
        "type" => "movie"
    ],
    [
        "title" => "Boba Fett",
        "type" => "series"
    ],
    [
        "title" => "Encanto",
        "type" => "movie"
    ],
    [
        "title" => "Moon Knight",
        "type" => "series"
    ]
];

$movies4 = [
    (object)[
        "title" => "Bad Guys", 
        "type" => "movie"
    ],
    (object)[
        "title" => "Fantastic Beasts",
        "type" => "movie"
    ],
    (object)[
        "title" => "Boba Fett",
        "type" => "series"
    ],
    (object)[
        "title" => "Encanto",
        "type" => "movie"
    ],
    (object)[
        "title" => "Moon Knight",
        "type" => "series"
    ]
];

/*
$alma = "korte";
$$alma = 6;
echo $korte;
*/

$movies5 = [
    (object)[
        "title" => "Bad Guys", 
        "type" => "movie",
        "length" => 90,
        "characters" => [
            "Wolf", "Snake", "Shark", "Tarantula", "Piranha"
        ]
    ],
    (object)[
        "title" => "The Batman",
        "type" => "movie",
        "length" => 190,
        "characters" => [
            "Batban", "The Riddler"
        ]
    ],
    (object)[
        "title" => "Fantastic Beasts",
        "type" => "movie",
        "length" => 180,
        "characters" => [
            "Newt", "Grindelwald", "Dumledore"
        ]
    ],
    (object)[
        "title" => "Boba Fett",
        "type" => "series",
        "length" => 400,
        "characters" => [
            "Boba Fett", "Fennec", "Mandalorian"
        ]
    ],
    (object)[
        "title" => "Encanto",
        "type" => "movie",
        "length" => 95,
        "characters" => [
            "Dolores", "Isabella", "Abuela"
        ]
    ],
    (object)[
        "title" => "Moon Knight",
        "type" => "series",
        "length" => 240,
        "characters" => [
            "Mark"
        ]
    ]
];

function moviesLongerThan2Hours($movies){
    $result = [];
    foreach($movies as $movie){
        if($movie->type == "movie" && $movie->length >= 120){
            $result[] = $movie->title;
        }
    }
    return $result;
}

$moviesSumTime = 0;
$seriesSumTime = 0;
foreach($movies5 as $movie){
    if($movie->type == "movie"){
        $moviesSumTime += $movie->length;
    }else{
        $seriesSumTime += $movie->length;
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
    table, th, td, tr{
        border: 1px solid black;
        border-collapse: collapse;
    }
    .fewChars{
        background-color: crimson;
    }
    .moviesDiv{
        background-color: aqua;
        display: inline-block;
    }
    .seriesDiv{
        background-color: coral;
        display: inline-block;
    }
</style>
<body>
    <h1>Media content</h1>

    <h2>Lista stringek tömbje</h2>
    <ul>
        <?php foreach($movies1 as $movie): ?>
            <li><?=$movie?></li>
        <?php endforeach ?>
    </ul>

    <h2>Lista típussal tömbök tömbje</h2>
    <ul>
        <?php foreach($movies2 as $movie): ?>
            <li><?=$movie[0]?> (<?=$movie[1]?>)</li>
        <?php endforeach ?>
    </ul>

    <h2>Lista típussal, asszociatív tömbök tömbje</h2>
    <ul>
        <?php foreach($movies3 as $movie): ?>
            <li><?=$movie["title"]?> (<?=$movie["type"]?>)</li>
        <?php endforeach ?>
    </ul>

    <h2>Lista típussal, objektumok tömbje</h2>
    <ul>
        <?php foreach($movies4 as $movie): ?>
            <li><?=$movie->title?> (<?=$movie->type?>)</li>
        <?php endforeach ?>
    </ul>

    <h2>Táblázat objektumok tömbje</h2>

    <table>
        <tr>
            <th>Title</th>
            <th>Type</th>
        </tr>
        <?php foreach($movies4 as $movie): ?>
            <tr>
                <td><?=$movie->title?></td>
                <td><?=$movie->type?></td>
            </tr>
        <?php endforeach ?>
    </table>

    <h2>Táblázat objektumok tömbje (sok mindennel)</h2>

    <table>
        <tr>
            <th>Title</th>
            <th>Type</th>
            <th>Length</th>
            <th>Characters</th>
        </tr>
        <?php foreach($movies5 as $movie): ?>
            <?php $class = (count($movie->characters) < 3) ? "fewChars" : "" ?>
            <tr class="<?=$class?>">
                <td><?=$movie->title?></td>
                <td><?=$movie->type?></td>
                <td><?=$movie->length?> min</td>
                <td>
                    <ul>
                        <?php foreach($movie->characters as $character): ?>
                            <li><?=$character?></li>
                        <?php endforeach ?>
                    </ul>
                </td>
            </tr>
        <?php endforeach ?>
    </table>

    Movies longer than 2 hours:
    <ul>
        <?php foreach(moviesLongerThan2Hours($movies5) as $movie_title): ?>
            <li><?=$movie_title?></li>
        <?php endforeach ?>
    </ul>

    <div>
        <div class="moviesDiv" style="width: <?=100 * $moviesSumTime / ($moviesSumTime + $seriesSumTime)?>%;">Movies: <?=$moviesSumTime?> min</div>
        <div class="seriesDiv" style="width: <?=100 * $seriesSumTime / ($moviesSumTime + $seriesSumTime)?>%;">Series: <?=$seriesSumTime?> min</div>
    </div>

    <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
</body>
</html>