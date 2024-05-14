<?php
// AUTENTIKÁCIÓ
// AUTORIZÁCIÓ
require_once 'database_queries.php';
$form_data = (object)[
    'id' => trim($_GET['id'] ?? '')
];

/*
ID-n elvégeztem az ellenőrzéseket
*/

delete_movie($form_data->id);
redirect('index.php');