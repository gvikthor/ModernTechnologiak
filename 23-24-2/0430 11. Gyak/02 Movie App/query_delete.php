<?php
// AUTENTIKÁCIÓ
// AUTORIZÁCIÓ
require_once 'functions.php';
$form_data = (object)[
    'id' => trim($_GET['id'] ?? '')
];

/*
ID-n elvégeztem az ellenőrzéseket
*/

delete_element('movies.json', $form_data->id);
redirect('index.php');