<?php

function db_connect($db_file_name, $uname = "", $pw = ""){
    $db = new PDO("sqlite:".$db_file_name, $uname, $pw);
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    return $db;
}

function db_query($db, $sql, $params = []){
    $query = $db->prepare($sql);
    $query->execute($params);
    return $query->fetchAll();
}

$db_connection = db_connect('movies.db');

$filter_director = 'Peter Jackson';
$movies = db_query(
    $db_connection,
    'select * from movies where director = :director',
    [
        'director' => $filter_director
    ]
);

?>

<ul>
    <?php foreach($movies as $movie): ?>
        <li><?= $movie['title'] ?></li>
    <?php endforeach ?>
</ul>