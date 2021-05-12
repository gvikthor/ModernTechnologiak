<?php
require_once "functions.php";


if(isset($_SESSION["logged_in"])){
    redirect("index.php");
}

session_start();
$errors = [];

if(isEmptyPost("uname")){
    $errors[] = "The username can't be empty!";
}else if(strlen(trim($_POST["uname"])) < 4){
    $errors[] = "The username must be atleast 4 characters!";
}else if(userExists(trim($_POST["uname"]))){
    $errors[] = "The username is taken!";
}

if(isEmptyPost("pword1") || isEmptyPost("pword2")){
    $errors[] = "The passworsd can't be empty strings!";
}else if($_POST["pword1"] != $_POST["pword2"]){
    $errors[] = "The passwords don't match!";
}else if(strlen($_POST["pword1"]) < 6){
    $errors[] = "The password must be atleast 6 characters long!";
}else if(!passwordComplex($_POST["pword1"])){
    $errors[] = "The password is not complex enough!";
}

if(count($errors) == 0){
    registerUser($_POST["uname"], $_POST["pword1"]);
    $_SESSION["logged_in"] = $_POST["uname"];
    redirect("index.php");
}else{
    $_SESSION["errors"] = $errors;
    redirect("createaccount.php");
}