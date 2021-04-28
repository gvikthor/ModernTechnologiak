<?php

function connect(){
    $db = new PDO("mysql:host=localhost;dbname=...", "...", "...");
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    return $db;
}

function query($database, $select, $params = []){
    $query = $database->prepare($select);
    $query->execute($params);
    return $query->fetchAll();
}

function execute($database, $statement, $params = []){
    $query = $database->prepare($statement);
    $query->execute($params);
}