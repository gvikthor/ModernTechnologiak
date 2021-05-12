<?php
require_once "functions.php";


//var_dump($_POST);
$uname = $_POST["uname"];
$pword = $_POST["pword"];
$errcode = 0;

if($uname == "Alma" && $pword == "Alma123"){
    session_start();
    $_SESSION["logged_in"] = "Alma";
}else{
    $errcode = 1;
}

if($errcode > 0) redirect("index.php?err=".$errcode);

redirect("index.php");