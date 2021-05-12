<?php

function jsonRead($filename){
    return json_decode(file_get_contents($filename));
}

$movies = jsonRead("movies.json");
/*
sok sornyi kód
*/

echo json_encode($movies);
?>