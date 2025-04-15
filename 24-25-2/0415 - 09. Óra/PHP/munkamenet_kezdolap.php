<?php
session_start();

$logged_in = isset($_SESSION['username']);


?>

<?php if($logged_in): ?>
    Szia <?=$_SESSION['username']?>!
    <a href="munkamenet_logout.php">Kijelentkezek</a>
<?php else: ?>
    Jelentkezz be!
    <a href="munkamenet_login.php">Bejelentkezek</a>
<?php endif ?>