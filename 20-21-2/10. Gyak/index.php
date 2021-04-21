<?php
/*
$adat1 = file_get_contents('adat1.txt');
var_dump($adat1);
file_put_contents('adat1.txt', 'Nincs ma szép időnk.');

$adat2 = json_decode(file_get_contents('adat2.json'));
var_dump($adat2);
$adat2->nev = "Körtefa";
file_put_contents('adat2.json', json_encode($adat2, JSON_PRETTY_PRINT));
*/

$adat3 = json_decode(file_get_contents('adat3.json'));
//var_dump($adat3);

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<style>
td, input{
    width: 150px;
}
td{
    text-align: center;
}
</style>
<body>
    <table>
        <tr>
            <th>Gyümölcs</th>
            <th>Szín</th>
        </tr>
        <?php foreach($adat3 as $gyumolcs): ?>
            <tr>
                <td><?=$gyumolcs->gyumolcs?></td>
                <td><?=$gyumolcs->szin?></td>
            </tr>
        <?php endforeach ?>
    </table>
    <form action="add.php" method="GET">
    <input name="gyumolcs"><input name="szin"><input type="submit">
    </form>
</body>
</html>