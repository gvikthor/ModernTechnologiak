<?php

echo "Almafa<br>";
var_dump( preg_match('/a/', 'almafa') == 1 );
var_dump( preg_match('/alma/', 'almafa') == 1 );
var_dump( preg_match('/[a][l][m][a]/', 'almafa') == 1 );
var_dump( preg_match('/[alma]/', 'almafa') == 1 );

echo "<br>lajkó<br>";
var_dump( preg_match('/a/', 'lajkó') == 1 );
var_dump( preg_match('/alma/', 'lajkó') == 1 );
var_dump( preg_match('/[a][l][m][a]/', 'lajkó') == 1 );
var_dump( preg_match('/[alma]/', 'lajkó') == 1 );

echo "<br>almaalma<br>";
var_dump( preg_match('/(alma)*/', 'alma') == 1 );
var_dump( preg_match('/(alma)*/', '') == 1 );
var_dump( preg_match('/(alma)*/', 'lajkó') == 1 );
var_dump( preg_match('/(alma)+/', 'alma') == 1 );
var_dump( preg_match('/(alma)+/', '') == 1 );
var_dump( preg_match('/(alma)+/', 'lajkó') == 1 );

echo "<br>eleje almaalma vége<br>";
var_dump( preg_match('/^(alma)*$/', 'alma') == 1 );
var_dump( preg_match('/^(alma)*$/', '') == 1 );
var_dump( preg_match('/^(alma)*$/', 'lajkó') == 1 );
var_dump( preg_match('/^(alma)+$/', 'alma') == 1 );
var_dump( preg_match('/^(alma)+$/', '') == 1 );
var_dump( preg_match('/^(alma)+$/', 'lajkó') == 1 );

echo "<br>komplex jelszó<br>";
$jsz = "alma";
var_dump(
    preg_match('/[a-zöüóőúéáűí]/', $jsz) == 1 &&
    preg_match('/[A-ZÖÜÓŐÚÉÁŰÍ]/', $jsz) == 1 &&
    preg_match('/[0-9]/', $jsz) == 1 &&
    preg_match('/[\.\*\_\-\!\=\@\&\#\ß\$]/', $jsz) == 1
);
$jsz = "Alma";
var_dump(
    preg_match('/[a-zöüóőúéáűí]/', $jsz) == 1 &&
    preg_match('/[A-ZÖÜÓŐÚÉÁŰÍ]/', $jsz) == 1 &&
    preg_match('/[0-9]/', $jsz) == 1 &&
    preg_match('/[\.\*\_\-\!\=\@\&\#\ß\$]/', $jsz) == 1
);
$jsz = "Alma123";
var_dump(
    preg_match('/[a-zöüóőúéáűí]/', $jsz) == 1 &&
    preg_match('/[A-ZÖÜÓŐÚÉÁŰÍ]/', $jsz) == 1 &&
    preg_match('/[0-9]/', $jsz) == 1 &&
    preg_match('/[\.\*\_\-\!\=\@\&\#\ß\$]/', $jsz) == 1
);
$jsz = "Alma,.";
var_dump(
    preg_match('/[a-zöüóőúéáűí]/', $jsz) == 1 &&
    preg_match('/[A-ZÖÜÓŐÚÉÁŰÍ]/', $jsz) == 1 &&
    preg_match('/[0-9]/', $jsz) == 1 &&
    preg_match('/[\,\.\*\_\-\!\=\@\&\#\ß\$]/', $jsz) == 1
);
$jsz = "Alma123,.";
var_dump(
    preg_match('/[a-zöüóőúéáűí]/', $jsz) == 1 &&
    preg_match('/[A-ZÖÜÓŐÚÉÁŰÍ]/', $jsz) == 1 &&
    preg_match('/[0-9]/', $jsz) == 1 &&
    preg_match('/[\,\.\*\_\-\!\=\@\&\#\ß\$]/', $jsz) == 1
);