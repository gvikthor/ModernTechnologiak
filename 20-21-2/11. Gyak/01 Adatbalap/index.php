<?php

require_once("functions.php");

$database = connect();
$data = 'Alma';
$result = query($database, 'SELECT * FROM users WHERE nev = :namep', [
    "namep" => $data
]);
var_dump($result);

echo "<br><br>";

execute($database, 'INSERT INTO `users` (`nev`, `leiras`) VALUES (:namep, :descp)', [
    "namep" => "Cseresznyefa",
    "descp" => "Ez egy cseresznyefa!"
]);


var_dump( query($database, "SELECT * FROM users") );