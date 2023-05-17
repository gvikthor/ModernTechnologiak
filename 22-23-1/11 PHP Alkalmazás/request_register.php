<?php
include_once 'functions.php';
session_start();

if(isset($_SESSION['user'])) redirect('index.php');

$form_data = [
    'username' => trim($_POST['username'] ?? ''),
    'password1' => trim($_POST['password1'] ?? ''),
    'password2' => trim($_POST['password2'] ?? '')
];
$user = null;

$errors = [];
if(strlen($form_data['username']) < 4){
    $errors[] = 'Username must be at least 4 characters.';
}

if(check_user_exists($form_data['username'])){
    $errors[] = 'Username is taken.';
}

if($form_data['password1'] != $form_data['password2']){
    $errors[] = 'The passwords are different.';
}

if(strlen($form_data['password1']) < 5){
    $errors[] = 'Password must be at least 5 characters.';
}

// jelszó elég bonyolult-e
// if(...)

if(count($errors) == 0){
    $user = [
        'username' => $form_data['username'],
        'password' => $form_data['password1']
    ];
    create_user($user);
    $_SESSION['user'] = $user['username']; // ha sikeresen regizstrált, jelentkeztessük is be
}else{
    $_SESSION['errors'] = $errors;
}

redirect('index.php');