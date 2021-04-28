<?php
require_once("functions.php");

if(!isset($_GET["title"]) || !isset($_GET["description"]) || !isset($_GET["releasedate"])){
    redirect("index.php");
}

$title   = $_GET["title"];
$desc    = $_GET["description"];
$release = $_GET["releasedate"];
$errcode = 0;

if(trim($title) == "")
    $errcode = 1;
else if(trim($desc) == "")
    $errcode = 2;
else if(trim($release) == "")
    $errcode = 3;
else if(is_nan($release))
    $errcode = 4;

if($errcode > 0) redirect("index.php?err=".$errcode);

execute(connect(),
'INSERT INTO `Movies` (`title`, `description`, `releasedate`)
 VALUES (:title, :description, :releasedate)', [
    "title" => $_GET["title"],
    "description" => $_GET["description"],
    "releasedate" => $_GET["releasedate"]
]);

redirect("index.php");