<?php

/////////////////// DATABASE ///////////////////

function connect(){
          //"mysql:host=localhost;dbname=adatbazis_neve", "felhasznalonev", "jelszo"    
    $db = new PDO("mysql:host=localhost;dbname=*****", "*****", "*****");
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

//////////////////// USERS ////////////////////
//ADATBÁZIS NEVÉT ÁT KELL ÍRNI (users_12gy)

function getUser($uname){
    $db = connect();                  
    $result = query($db, "SELECT uname, pword FROM `users_12gy` WHERE uname=:uname", [
        "uname" => $uname
    ]);
    return $result;
}

function registerUser($uname, $pword){
    $db = connect();

    execute($db,
    'INSERT INTO `users_12gy` (`uname`, `pword`) VALUES (:uname, :pword)', [
        "uname" => $uname,
        "pword" => $pword
    ]);
}

/////////////////// UTILITY ///////////////////

function redirect($url){
    header('Location: '.$url);
    die;
}