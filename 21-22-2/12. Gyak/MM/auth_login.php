<?php
include_once "functions.php";
include_once "db_functions.php";

session_start();
if(post_is_not_empty("user") && post_is_not_empty("pword")){
    $user = db_query(
        db_connect("mtech-mm"),
        "select pword from users where user = :user",
        [
            "user" => $_POST["user"]
        ]
    );

    if(count($user) == 1 &&  password_verify($_POST["pword"], $user[0]["pword"])){
        $_SESSION["user"] = $_POST["user"];
    }else{
        $_SESSION["error"] = "Rossz felhasználónév vagy jelszó.";
    }
}
redirect("index.php");