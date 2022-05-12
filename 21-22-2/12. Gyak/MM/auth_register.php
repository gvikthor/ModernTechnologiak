<?php
include_once "functions.php";
include_once "db_functions.php";

session_start();
if(!session_is_not_empty("user")){
    if(post_is_not_empty("user") && post_is_not_empty("pword1") && post_is_not_empty("pword2")){
        $user = db_query(
            db_connect("mtech-mm"),
            "select pword from users where user = :user",
            [
                "user" => $_POST["user"]
            ]
        );

        $us = trim($_POST["user"]);
        $p1 = trim($_POST["pword1"]);
        $p2 = trim($_POST["pword2"]);

        if(count($user) > 0){
            $_SESSION["error"] = "A felhasználónév foglalt.";
        }else if(strlen($us) <= 3){
            $_SESSION["error"] = "A felhasználónév legyen legalább 4 karater hosszú!";
        }else if($p1 != $p2){
            $_SESSION["error"] = "A jelszavak nem egyeznek.";
        }else if(strlen($p1) <= 5){
            $_SESSION["error"] = "A jelszó legyen legalább 6 karakter hosszú!";
        }else{
            db_query(
                db_connect("mtech-mm"),
                "insert into users (`user`, `pword`) values (:user, :pword)",
                [
                    "user" => $us,
                    "pword" => password_hash($p1, PASSWORD_DEFAULT)
                ]
            );
            $_SESSION["user"] = $us;
        }
    }
}
redirect("index.php");