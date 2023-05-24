<?php
include_once 'functions.php';
session_start();

if(isset($_SESSION['user'])) redirect('index.php');

$form_data = [
    'username' => trim($_POST['username'] ?? ''),
    'password' => trim($_POST['password'] ?? '')
];
$user = null;

$errors = [];
try{
    $user = get_user_by_username($form_data['username']);
}catch(Exception){
    $errors[] = 'Incorrect username or password';
}

if(!is_null($user) && $form_data['password'] != $user['password']){
    $errors[] = 'Incorrect username or password';
}

if(count($errors) == 0){
    $_SESSION['user'] = $user['username'];
}else{
    $_SESSION['errors'] = $errors;
}

redirect('index.php');