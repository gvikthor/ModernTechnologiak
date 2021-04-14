GET: <?php var_dump($_GET); ?> <br>
isset($_GET): <?php var_dump(isset($_GET)); ?> <br>
isset($_GET['givenname']): <?php var_dump(isset($_GET['givenname'])); ?> <br>
count($_GET): <?=count($_GET)?> <br>

<br>

POST: <?php var_dump($_POST); ?> <br>
isset($_POST): <?php var_dump(isset($_POST)); ?> <br>
isset($_POST['givenname']): <?php var_dump(isset($_POST['givenname'])); ?> <br>
count($_POST): <?=count($_POST)?> <br>

<br>

<?php

var_dump($_SERVER['REQUEST_METHOD']);

?>

<br><br>
Ez egy másik oldal.
<?php if($_SERVER['REQUEST_METHOD'] == 'GET'): ?>
    Get kérés elemei:
    <ul>
        <li><?=$_GET['givenname']?></li>
        <li><?=$_GET['familyname']?></li>
        <li><?=$_GET['age']?></li>
    </ul>
<?php else: ?>
    Post kérés elemei:
    <ul>
        <li><?=$_POST['givenname']?></li>
        <li><?=$_POST['familyname']?></li>
        <li><?=$_POST['age']?></li>
    </ul>
<?php endif ?>

<a href="index.php?adulthood=<?=18 - ($_SERVER['REQUEST_METHOD'] == 'GET' ? $_GET['age'] : $_POST['age'])?>">Vissza a főoldalra</a>