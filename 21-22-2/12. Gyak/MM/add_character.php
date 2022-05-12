<?php
include_once "functions.php";
include_once "db_functions.php";



session_start();


if(get_is_not_empty("newcharacter") && session_is_not_empty("user")){
    $db = db_connect("mtech-mm");
    //db_query($db, 'insert into starwars (`name`) values ("' . $_GET["newcharacter"] . '")');
    db_query($db, 'insert into starwars (`name`) values (:name)', [
        "name" => $_GET["newcharacter"]
    ]);

                                //insert into starwars (`name`) values ("Han Solo")

                                //insert into starwars (`name`, `age`, `gender`) values (:valami1, :valami2, :valami3)
                                //valami1 = Han Solo
                                //valami2 = 30
                                //valami3 = male
    
    /*$characters = json_decode(file_get_contents("starwars.json"));
    $characters[] = $_GET["newcharacter"];
    file_put_contents("starwars.json", json_encode($characters, JSON_PRETTY_PRINT));*/
}

redirect("index.php");

/*
file_put_contents(
    "starwars.json",
    json_encode($characters)
);
*/