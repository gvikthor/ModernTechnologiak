<?php
include_once "functions.php";

function testMovie($movie){
    $typeMatch = true;

    if(getIsNotEmpty("type")){
        $typeMatch = $movie->type == $_GET["type"];
    }

    return str_contains(
        trim(strtolower($movie->title)),
        trim(strtolower($_GET["query"]))
    ) && $typeMatch;
}

$movies = json_decode(file_get_contents("movies.json"));
$query = "";
$results = [];

if(getIsNotEmpty("query")){
    $query = $_GET["query"];
    foreach($movies as $movie){
        if(testMovie($movie)){
            $results[] = $movie;
        }
    }
}else{
    $results = $movies;
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
    <form action="index.php">
        Query: <input name="query" value="<?=$query?>"> <br>
        <select name="type">
            <option value="">Either</option>
            <option value="movie"  <?=(getIsNotEmpty("type") && $_GET["type"] == "movie")  ? "selected" : ""?>>Movie</option>
            <option value="series" <?=(getIsNotEmpty("type") && $_GET["type"] == "series") ? "selected" : ""?>>Series</option>
        </select>
        <input type="submit">
    </form>
    <?php if($query != ""): ?>
        <?=count($results)?> results for your search term: <?=htmlspecialchars($query)?>
    <?php endif ?>
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