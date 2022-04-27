<?php

//var_dump($_GET);
//echo($_GET["query"]);

function str_contains($haystack, $needle){
    return strpos($haystack, $needle) !== false;
}

function testMovie($movie){
    return str_contains(
        trim(strtolower($movie->title)),
        trim(strtolower($_GET["query"]))
    );
}

$movies = [
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

$results = [];
foreach($movies as $movie){
    if(testMovie($movie)){
        $results[] = $movie;
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
<body>
    <table>
        <tr>
            <th>Title</th>
            <th>Type</th>
            <th>Length</th>
            <th>Characters</th>
        </tr>
        <?php foreach($results as $movie): ?>
            <tr>
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
</body>
</html>