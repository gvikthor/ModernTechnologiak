<?php
$content = file_get_contents('userek.json');
$users = json_decode($content);
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <form action="urlap_feldolgoz.php">
        <label>Family name</label> <br>
        <input name="familyname"> <br>

        <label>Given name</label> <br>
        <input name="givenname"> <br>

        <label>Favourite color</label> <br>
        <input type="radio" name="favcolour" value="red"> Magyar zászlón lévő vörös szín <br>
        <input type="radio" name="favcolour" value="blue"> A szeles tenger viharos mélykék színe <br>
        <input type="radio" name="favcolour" value="yellow"> Balatoni strandkorlát sárga <br>
        <input type="radio" name="favcolour" value="green"> A pókemberből a zöld goblin színe <br>

        <input type="submit">
    </form>

    <table>
        <tr>
            <th>Vezetéknév</th>
            <th>Keresztnév</th>
        </tr>
        <?php foreach ($users as $user): ?>
            <tr style="color:<?=$user->favcolour?>">
                <td><?=$user->familyname?></td>
                <td><?=$user->givenname?></td>
            </tr>
        <?php endforeach ?>
    </table>
</body>

</html>