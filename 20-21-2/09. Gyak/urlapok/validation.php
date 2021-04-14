<?php

function redirect($url){
    header('Location: '.$url);
    die;
}

function isEmpty($property){
    return !isset($_GET[$property]) || trim($_GET[$property]) == '';
}

function isAllMcFood($foods){
    $allIs = true;
    foreach($foods as $food){
        $allIs = $allIs && in_array($food, ['bigmac', 'nuggets', 'wrap', 'mcfarm']);
    }
    return $allIs;
}

if(!$_SERVER['REQUEST_METHOD'] == 'GET' || !isset($_GET['sent'])){
    redirect('index.php');
}

$errors = [];

//Given Name
//if(!(isset($_GET['givenname']) && trim($_GET['givenname']) != '')){
if(isEmpty('givenname')){
    $errors[] = 'Given name can\'t be empty';
}

//Family Name
if(isEmpty('familyname')){
    $errors[] = 'Family name can\'t be empty';
}

//Age
if(isEmpty('age')){
    $errors[] = 'Age can\'t be empty';
}else if(!is_numeric($_GET['age'])){
    $errors[] = 'Age must be a number!';
}else if($_GET['age'] != intval($_GET['age'])){
    $errors[] = 'Age must be a whole number!';
}else if(intval($_GET['age']) < 18){
    $errors[] = 'Age must not be under 18!';
}

//Gender
if(isEmpty('city')){
    $errors[] = 'City can\'t be empty!';
}else if(!in_array($_GET['city'], ['bp', 'db', 'sz', 'mk', 'ot'])){
    $errors[] = 'City must be of the given list!';
}

//Foods
//var_dump($_GET['foods']);
if(!isset($_GET['foods']) || count($_GET['foods']) < 1){
    $errors[] = 'Please select at least one food!';
}else if(!isAllMcFood($_GET['foods'])){
    $errors[] = 'Foods must be of the given list!';
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
    <ul>
        <?php foreach($errors as $error): ?>
            <li><?=$error?></li>
        <?php endforeach ?>
    </ul>
    <a href="index.php">Try again</a>
<?php else: ?>
    Successful save!
<?php endif ?>
</body>
</html>