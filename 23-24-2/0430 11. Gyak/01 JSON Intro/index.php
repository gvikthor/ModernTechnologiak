<?php
require_once 'functions.php';
$movies = json_decode(file_get_contents('movies.json'));
$movies[] = (object) [
    'id' => uniqid(),
    'title' => 'Lego Star Wars The Complete Saga',
    'year' => 2002
];
file_put_contents('movies.json', json_encode($movies, JSON_PRETTY_PRINT));
//highlight_array($movies);
?>

<ul>
    <?php foreach($movies as $movie): ?>
        <li><?=$movie->title?> (<?=$movie->year?>)</li>
    <?php endforeach ?>
</ul>