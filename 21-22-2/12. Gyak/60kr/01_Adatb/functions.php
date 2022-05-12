<?php

function str_contains($haystack, $needle){
    return strpos($haystack, $needle) !== false;
}

function get_is_not_empty($attrName){
    return isset($_GET[$attrName]) && trim($_GET[$attrName]) != "";
}

function post_is_not_empty($attrName){
    return isset($_POST[$attrName]) && trim($_POST[$attrName]) != "";
}

function session_is_not_empty($attrName){
    return isset($_SESSION[$attrName]) && trim($_SESSION[$attrName]) != "";
}

function redirect($page){
    header("Location: ".$page);
    die;
}