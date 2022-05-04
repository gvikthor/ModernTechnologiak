<?php
include_once "functions.php";
session_start();
if(session_is_not_empty("user")){
    if(get_is_not_empty("newcharacter")){
        $characters = json_decode(file_get_contents("starwars.json"));
        $characters[] = $_GET["newcharacter"];
        file_put_contents("starwars.json", json_encode($characters, JSON_PRETTY_PRINT));
        //file_put_contents("starwars.json", json_encode($characters));
    }
}

redirect("index.php");