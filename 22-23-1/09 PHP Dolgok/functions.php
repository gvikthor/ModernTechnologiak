<?php
/**
 * Átirányít egy másik oldalra és leállítja a script futását.
 * @param $target A cél file helye
 */
function redirect($target){
    header("Location: $target");
    die;
}