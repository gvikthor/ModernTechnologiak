<?php

function db_connect($db_file_name, $uname = "root", $pw = "")
{
    $db = new PDO("mysql:host=localhost:3307;dbname=$db_file_name", $uname, $pw);
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    return $db;
}

function db_query($db, $sql, $params = [])
{
    $query = $db->prepare($sql);
    $query->execute($params);
    return $query->fetchAll();
}


$db = db_connect('movieapp');
$query = 'select * from movies';
echo json_encode(db_query($db, $query));
