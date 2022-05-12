<?php
include_once "db_functions.php";
include_once "functions.php";
session_start();
if(session_is_not_empty("user")){
    if(get_is_not_empty("newcharacter")){
        db_query(
            db_connect("mtech-hatvan"),
            "insert into starwars (`name`) values (:character)",
            [
                "character" => $_GET["newcharacter"]
            ]
        );

        echo(json_encode(db_query(
            db_connect("mtech-hatvan"),
            "select * from starwars"
        )));
    }
}