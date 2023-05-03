<?php
require_once 'functions.php';

$password = json_decode(file_get_contents('login_data.json'))->password;

$form_data = [
    'movie' => trim($_POST['movie'] ?? ''),
    'password' => trim($_POST['password'] ?? '')
];

$errors = [];
if($form_data['movie'] == ''){
    $errors[] = 'Movie can\'t be empty';
}

if(!password_verify($form_data['password'], $password)){
    $errors[] = 'Incorrect password';
}

if(count($errors) == 0){
    $movies = json_decode(file_get_contents('movies.json'));
    $movies[] = $form_data['movie'];
    file_put_contents('movies.json', json_encode($movies, JSON_PRETTY_PRINT));
    redirect('index.php');
}else{
    var_dump($errors);
}