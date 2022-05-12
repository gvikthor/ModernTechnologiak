<?php
include_once "db_functions.php";
include_once "functions.php";

session_start();
if(!session_is_not_empty("user") && post_is_not_empty("username") && post_is_not_empty("password")){
    $user = db_query(
        db_connect("mtech-hatvan"),
        "select password from users where username = :un",
        [
            "un" => trim($_POST["username"])
        ]
    );

    if(count($user) == 1 && password_verify($_POST["password"], $user[0]["password"])){
        $_SESSION["user"] = trim($_POST["username"]);
    }    
}
redirect("index.php");