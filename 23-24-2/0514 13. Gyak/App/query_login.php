<?php
require_once 'database_queries.php';
session_start();

if(isset($_SESSION['user'])){
    redirect('index.php');
}

$form_data = (object)[
    'uname'  => trim($_POST['uname'] ?? ''),
    'pword' => trim($_POST['pword'] ?? ''),
]; 

if(check_user_and_password($form_data->uname, $form_data->pword)){
    $_SESSION['user'] = $form_data->uname;
    $_SESSION['admin'] = is_admin($form_data->uname);
    redirect('index.php');
}else{
    $_SESSION['errors'] = ['The password or username is incorrect!'];
    redirect('login.php');
}