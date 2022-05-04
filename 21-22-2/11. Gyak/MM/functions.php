<?php

function str_contains($haystack, $needle){
    return strpos($haystack, $needle) !== false;
}

function getIsNotEmpty($attrName){
    return isset($_GET[$attrName]) && trim($_GET[$attrName]) != "";
}

function redirect($page){
    header("Location: ".$page);
    die;
}