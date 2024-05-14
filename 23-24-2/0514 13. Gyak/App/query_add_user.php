<?php
require_once 'database_queries.php';
session_start();
if(isset($_SESSION['user'])){
    redirect('index.php');
}

$form_data = (object)[
    'uname'  => trim($_POST['uname'] ?? ''),
    'email'  => trim($_POST['email'] ?? ''),
    'pword1' => trim($_POST['pword1'] ?? ''),
    'pword2' => trim($_POST['pword2'] ?? ''),
]; 

$errors = [];

if(is_username_taken($form_data->uname)){
    $errors[] = 'Username is taken!';
}

if(strlen($form_data->uname) < 5){
    $errors[] = 'Username must be atleast 5 characters long!';
}

if(!filter_var($form_data->email, FILTER_VALIDATE_EMAIL)){
    $errors[] = 'This is not a valid e-mail adress: ' . htmlspecialchars($form_data->email);
}

if($form_data->pword1 != $form_data->pword2){
    $errors[] = 'The passwords don\'t match!';
}else if($form_data->pword1 < 12){
    $errors[] = 'The password must be atleast 12 characters long!';
}

if(count($errors) == 0){
    add_new_user($form_data->uname, $form_data->email, $form_data->pword1);
    $_SESSION['user'] = $form_data->uname;
}else{
    $_SESSION['errors'] = $errors;
    highlight_array($errors);
}

//redirect('index.php');