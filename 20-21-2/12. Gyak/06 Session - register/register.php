<?php
require_once "functions.php";

if(isset($_SESSION["logged_in"])){
    redirect("index.php");
}

if(!isset($_POST["uname"]) || !isset($_POST["pword1"]) || !isset($_POST["pword2"])){
    redirect("index.php");
}

$uname = $_POST["uname"];
$pword1 = $_POST["pword1"];
$pword2 = $_POST["pword2"];
$errcode = 0;

$result = getUser($uname);
if(count($result) > 0){
    $errcode = 1;
}else if($pword1 != $pword2){
    $errcode = 2;
}else if(trim($uname) == ""){
    $errcode = 3;
}

if($errcode == 0){
    registerUser($uname, $pword1);
    session_start();
    $_SESSION["logged_in"] = $uname;
    redirect("index.php");
}else{
    redirect("createaccount.php?err=".$errcode);
}