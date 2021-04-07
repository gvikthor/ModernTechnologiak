<?php

//echo "Almafa";

$welcomeMessage = "Hello There!";
echo $welcomeMessage . "<br>"; //stringeket ponttal fűzök össze, nem + jellel

$thisIsAnArray = [1,5,6,3,"5","appletree",[1,2,3,4],5];
//echo $thisIsAnArray;
$thisIsAnArray[] = 9; //javascriptben a push függvény
var_dump($thisIsAnArray);
echo "<br>" . $thisIsAnArray[2] . "<br>";

//Asszociatív tömb
$person1 = [
    "name" => "Lazlow Lohnay",
    "age" => 60,
    "gender" => "woman"
];

$person1["children"] = false;

var_dump($person1);

echo "<br><br>" . $person1["name"] . "  is her name<br><br>";

//Objektum
$person2 = (object)[
    "name" => "Lazlow Lohnay",
    "age" => 60,
    "gender" => "woman"
];

$person2->children = false;

var_dump($person2);

echo "<br>" . $person2->name . " is the second person's name.<br>";

///////////////////////////////////////////////////////////////////////////

$countries = ["Slovakia", "Austria", "Slovenia", "Croatia", "Serbia", "Romania", "Ukraine"];

echo "Hungarian neighbouring countries (i loop)<br>";
for($i = 0; $i < count($countries); $i++){  //JS: countries.length => PHP: count($countries)
    echo "[" . $i . "] " . $countries[$i] . "<br>";
}

echo "Hungarian neighbouring countries (foreach)<br>";
foreach($countries as $country){
    echo "> " . $country . "<br>";
}

echo "Hungarian neighbouring countries (foreach with index)<br>";
foreach($countries as $countryIndex => $country){
    echo "[" . $countryIndex . "] " . $country . "<br>";
}

$booleanVariable = true;
if($booleanVariable){

}else if(false){

}else{
    
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
    <?php echo $welcomeMessage; ?>
    <?=$welcomeMessage?>

    <h1>Hungarian neighbouring countries (inline foreach echo)</h1>
    <ul>
    <?php
        foreach($countries as $country){
            echo "<li>" . $country . "</li>";
        }
    ?>
    </ul>

    <h1>Hungarian neighbouring countries (inline foreach ?=)</h1>
    <ul>
    <?php foreach($countries as $country){ ?>
        <li>EU <?=$country?></li>
    <?php } ?>
    </ul>

    <h1>Hungarian neighbouring countries (alternate foreach ?=)</h1>
    <ul>
    <?php foreach($countries as $country): ?>
        <li>EUR <?=$country?></li>
    <?php endforeach ?>
    </ul>

    <!--
        alternatív szintax, ami átláthatóbb html-en belül
        a vezérlési szerkezet megmondja, hogyan generálódjon a HTML
        a ?= pedig olyan, mint az echo
    -->
</body>
</html>