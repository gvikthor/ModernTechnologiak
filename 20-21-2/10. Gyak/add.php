<?php

function redirect($url){
    header('Location: '.$url);
    die;
}

$gyumolcsok = json_decode(file_get_contents('adat3.json'));

$gyumolcsok[] = (object)[
    "gyumolcs" => $_GET["gyumolcs"],
    "szin" => $_GET["szin"]
];

file_put_contents('adat3.json', json_encode($gyumolcsok, JSON_PRETTY_PRINT));

redirect('index.php');