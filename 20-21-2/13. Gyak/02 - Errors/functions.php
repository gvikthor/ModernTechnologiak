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

//////////////////// JSON ////////////////////

function jsonRead($filename){
    return json_decode(file_get_contents($filename));
}

function jsonWrite($filename, $data){
    file_put_contents($filename, json_encode($data, JSON_PRETTY_PRINT));
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

function userExists($uname){
    $result = getUser($uname);
    return count($result) > 0;
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

function isEmptyPost($name){
    return !isset($_POST[$name]) || trim($_POST[$name]) == "";
}
function isEmptyGet($name){
    return !isset($_GET[$name]) || trim($_GET[$name]) == "";
}

function passwordComplex($pword){
    return (
        preg_match('/[a-zöüóőúéáűí]/', $pword) == 1 &&
        preg_match('/[A-ZÖÜÓŐÚÉÁŰÍ]/', $pword) == 1 &&
        preg_match('/[0-9]/', $pword) == 1 &&
        preg_match('/[\,\.\*\_\-\!\=\@\&\#\ß\$]/', $pword) == 1
    );
}