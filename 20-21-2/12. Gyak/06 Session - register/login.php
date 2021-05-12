<?php
require_once "functions.php";

if(isset($_SESSION["logged_in"])){
    redirect("index.php");
}

if(!isset($_POST["uname"]) || !isset($_POST["pword"])){
    redirect("index.php");
}


//var_dump($_POST);
$uname = $_POST["uname"];
$pword = $_POST["pword"];
$errcode = 0;

$result = getUser($uname);
//var_dump($result);

if(count($result) == 1 && $pword == $result[0]["pword"]){
    session_start();
    $_SESSION["logged_in"] = $uname;
}else{
    $errcode = 1;
}

if($errcode > 0) redirect("index.php?err=".$errcode);

redirect("index.php");