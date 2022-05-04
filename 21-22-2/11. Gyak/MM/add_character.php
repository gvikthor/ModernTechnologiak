<?php
include_once "functions.php";

if(getIsNotEmpty("newcharacter")){
    $characters = json_decode(file_get_contents("starwars.json"));
    $characters[] = $_GET["newcharacter"];
    file_put_contents("starwars.json", json_encode($characters, JSON_PRETTY_PRINT));
}

redirect("index.php");

/*
file_put_contents(
    "starwars.json",
    json_encode($characters)
);
*/