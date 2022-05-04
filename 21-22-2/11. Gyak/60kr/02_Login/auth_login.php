<?php
include_once "functions.php";

session_start();
if(!session_is_not_empty("user") && get_is_not_empty("username") && get_is_not_empty("password")){
    $users = json_decode(file_get_contents("users.json"));
    $found_user = (object)[];
    $found = false;
    foreach($users as $user){
        if($user->username == $_GET["username"]){
            $found = true;
            $found_user = $user;
            break;
        }
    }

    if($found && password_verify($_GET["password"], $found_user->password)){
        $_SESSION["user"] = $found_user->username;
    }    
}
redirect("index.php");