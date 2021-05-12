<?php
require_once "functions.php";

session_start();
$_SESSION["logged_in"] = "";
redirect("index.php");