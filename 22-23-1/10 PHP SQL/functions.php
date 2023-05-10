<?php
/**
 * Átirányít egy másik oldalra és leállítja a script futását.
 * @param $target A cél file helye
 */
function redirect($target){
    header("Location: $target");
    die;
}

/**
 * Kapcsolódik egy adatbázishoz.
 * @param $db_file_name Az adatbázis fájl neve (pl. movies.db)
 */
function db_connect($db_file_name, $uname = "", $pw = ""){
    $db = new PDO("sqlite:".$db_file_name, $uname, $pw);
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    return $db;
}

/**
 * Lefuttat egy kérést az adatbázisban.
 * @param $db Az adatbázis kapcsolat
 * @param $sql Az SQL utasítás
 * @param $params Az utasítás paraméterei
 */
function db_query($db, $sql, $params = []){
    $query = $db->prepare($sql);
    $query->execute($params);
    return $query->fetchAll();
}