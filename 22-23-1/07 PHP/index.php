<?php
    $price = 7;
    $something = 'price';
    $random_array = ['apple', 45, true, [false, 'apple']];
    //error_log($price);
    //var_dump($fruits);
    $fruits = ['apple', 'pearl', 'peach'];

    $complex_fruit_array = [
        'name' => 'apple',
        'price' => 3
    ];
    error_log($complex_fruit_array['name']);

    $complex_fruit_object = (object)[
        'name' => 'peach',
        'price' => 3
    ];
    error_log($complex_fruit_object->name);

    $fruits2 = [
        ['name' => 'apple', 'price' => 300],
        ['name' => 'pearl', 'price' => 450],
        ['name' => 'peach', 'price' => 210]
    ];

    $movies = [
        ['title' => 'Avatar 2', 'release' => 2022, 'age' => 12],
        ['title' => 'Renfield', 'release' => 2023, 'age' => 18],
        ['title' => 'Star Wars', 'release' => 1977, 'age' => 12],
        ['title' => 'Lord of the Rings', 'release' => 2002, 'age' => 16]
    ];

    $friends = [
        ['name' => 'Peter', 'years' => [2019, 2023]],
        ['name' => 'George', 'years' => [2020, 2021, 2023]],
        ['name' => 'Steve', 'years' => [2022]],
        ['name' => 'Aaron', 'years' => [2019, 2021, 2023]],
        ['name' => 'Laure', 'years' => [2019, 2020, 2021, 2022, 2023]]
    ];
    function amount_of_new_year_parties($friend){
        return count($friend['years']) + 1; // ad-hoc hozzáadunk egy évet a feladat kedvéért
    }

    $őßirózsä = 'valami';
    error_log($őßirózsä);
    $🤣 = 'valami';
    error_log($🤣);

    $object_with_array = (object)[
        'name' => 'Peter',
        'friends' => ['George', 'Steve']
    ];

    
    error_log($friends[0]['years'][0]);
    error_log($object_with_array->friends[0]);
    /*$dynamic = 'name';
    error_log($object_with_array->$dynamic);*/
    $dynamic = 'friends';
    error_log($object_with_array->$dynamic[0]);

    $friend_group = [
        (object)['name' => 'Peter', 'animals' => [
            (object)['name' => 'Cirmi', 'species' => 'cat']
        ]],
        (object)['name' => 'George', 'animals' => [
            (object)['name' => 'Woofy', 'species' => 'dog'],
            (object)['name' => 'Meeowy', 'species' => 'cat'],
        ]],
        (object)['name' => 'Steve', 'animals' => [
            (object)['name' => 'Móka', 'species' => 'cat'],
            (object)['name' => 'Kacagás', 'species' => 'cat'],
            (object)['name' => 'Vidámság', 'species' => 'cat'],
        ]],
        (object)['name' => 'Aaron', 'animals' => [
            (object)['name' => 'Adolf', 'species' => 'dog']
        ]]
    ];
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
    <h2>Variables</h2>
    Apple <?=$price?>$

    <h2>Arrays</h2>
    <ul>
    <?php foreach($fruits as $fruit): ?>
        <li><?=$fruit?></li>
    <?php endforeach ?>
    </ul>

    <h2>Array of arrays</h2>
    <table>
        <thead>
            <tr>
                <th>Fruit</th>
                <th>Price</th>
            </tr>
        </thead>
        <tbody>
        <?php foreach($fruits2 as $fruit): ?>
            <tr>
                <td><?=$fruit['name']?></td>
                <td><?=$fruit['price']?> Ft</td>
            </tr>
        <?php endforeach ?>
        </tbody>
    </table>

    <h2>If and loop</h2>
    <ul>
    <?php foreach($movies as $movie): ?>
        <?php if($movie['age'] <= 13): ?>
            <li><?=$movie['title']?> (<?=$movie['release']?>)</li>
            <!--li>< ?=$movie['title'] . ' ' . $movie['release']?></li-->
        <?php endif ?>
    <?php endforeach ?>
    </ul>

    <h2>Functions</h2>
    <ul>
    <?php foreach($friends as $friend): ?>
        <li><?=$friend['name']?>, <?=amount_of_new_year_parties($friend)?> new year parties spent together</li>
    <?php endforeach ?>
    </ul>
</body>
</html>