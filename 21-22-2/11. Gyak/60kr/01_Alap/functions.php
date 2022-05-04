<?php

function str_contains($haystack, $needle){
    return strpos($haystack, $needle) !== false;
}

function get_is_not_empty($attrName){
    return isset($_GET[$attrName]) && trim($_GET[$attrName]) != "";
}

function redirect($page){
    header("Location: ".$page);
    die;
}