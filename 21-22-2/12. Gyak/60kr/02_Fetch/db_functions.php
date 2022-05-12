<?php

function db_connect($db_file_name, $uname = "", $pw = ""){
    $db = new PDO("sqlite:".$db_file_name, $uname, $pw);
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    return $db;
}

function db_query($db, $sql, $params = []){
    $query = $db->prepare($sql);
    $query->execute($params);
    return $query->fetchAll();
}

?>