<?php
include_once "db_functions.php";
include_once "functions.php";

session_start();
if(!session_is_not_empty("user") && post_is_not_empty("username") &&
    post_is_not_empty("password1") && post_is_not_empty("password2")){
    $user = db_query(
        db_connect("mtech-hatvan"),
        "select password from users where username = :un",
        [
            "un" => trim($_POST["username"])
        ]
    );

    $uppercase = preg_match('@[A-ZÖÜÓŐÚÉÁŰÍ]@', $_POST["password1"]);
    $lowercase = preg_match('@[a-zöüóőúéáűí]@', $_POST["password1"]);
    $number    = preg_match('@[0-9]@', $_POST["password1"]);

    if(count($user) == 1){
        $_SESSION["error"] = "A felhasználónév már foglalt!";
    }else if(strlen(trim($_POST["username"])) < 5){
        $_SESSION["error"] = "A felhasználónév legyen legalább 5 karakter hosszú!";
    }else if($_POST["password1"] != $_POST["password2"]){
        $_SESSION["error"] = "A jelszavak nem egyeznek!";
    }else if(strlen($_POST["password1"]) < 6){
        $_SESSION["error"] = "A jelszó legyen legalább 6 karakter hosszú!";
    }else if(!$uppercase || !$lowercase || !$number){
        $_SESSION["error"] = "A jelszó tartalmazzon legalább egy kisbetűt, nagybetűt és számot!";
    }else{
        db_query(
            db_connect("mtech-hatvan"),
            "insert into users (`username`, `password`) values (:un, :pw)",
            [
                "un" => trim($_POST["username"]),
                "pw" => password_hash($_POST["password1"], PASSWORD_DEFAULT)
            ]
        );
        $_SESSION["user"] = trim($_POST["username"]);
    }
}
redirect("index.php");