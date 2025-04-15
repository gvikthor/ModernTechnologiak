<?php
session_start();
$_SESSION['username'] = 'Peti';
header('Location: munkamenet_kezdolap.php');