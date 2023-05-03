<?php

var_dump($_POST);

$valid_movie_values = [
    'Star Wars',
    'Star Trek',
    'Stargate',
    'Other',
];

$form_data = [
    'familyname' => trim($_POST['familyname'] ?? ''),
    'givenname' => trim($_POST['givenname'] ?? ''),
    'email' => trim($_POST['email'] ?? ''),
    'age' => trim($_POST['age'] ?? 0),
    // animal names are separated by newlines
    //'animalnames' => explode("\n", $_POST['animalnames'] ?? ''), // split
    // map the sepatrated animal names to trimmed values
    'animalnames' => array_map('trim', explode("\n", $_POST['animalnames'] ?? '')),
    'movie' => trim($_POST['movie'] ?? ''),
    'terms' => isset($_POST['terms']) && $_POST['terms'] == '1'
];

$errors = [];
if($form_data['familyname'] == '') {
    $errors[] = 'Family name is required';
}

if($form_data['givenname'] == '') {
    $errors[] = 'Given name is required';
}

if($form_data['email'] == '') {
    $errors[] = 'Email is required';
}else if(!filter_var($form_data['email'], FILTER_VALIDATE_EMAIL)) {
    $errors[] = 'Email is invalid';
}

if($form_data['age'] == '') {
    $errors[] = 'Age is required';
}else if(!is_numeric($form_data['age'])) { // isNaN volt javascriptben
    $errors[] = 'Age is invalid';
}else if(intval($form_data['age']) < 18) { // floatval
    $errors[] = 'Age must be at least 18';
}

$filtered_animals = array_filter($form_data['animalnames'], function ($animal){
    return strlen($animal) > 0;
});
if(count($filtered_animals) == 0) {
    $errors[] = 'Animal names are required';
}

if($form_data['movie'] == '') {
    $errors[] = 'Movie is required';
}else if(!in_array($form_data['movie'], $valid_movie_values)) {
    $errors[] = 'Movie is invalid';
}

if(!$form_data['terms']) {
    $errors[] = 'Terms must be accepted';
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php if(count($errors) > 0): ?>
        <h2>Error!</h2>
        <ul>
            <?php foreach($errors as $error): ?>
                <li><?=$error?></li>
            <?php endforeach ?>
        </ul>
    <?php else: ?>
        <h2>🙂</h2>
        <?php var_dump($form_data) ?>
    <?php endif ?>
</body>
</html>