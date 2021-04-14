<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="validation.php">
        <h2>Given Name</h2>
        <input name="givenname">

        <h2>Family Name</h2>
        <input name="familyname">

        <h2>Age</h2>
        <input name="age">

        <h2>City</h2>
        <input type="radio" name="city" value="bp"> Budapest <br>
        <input type="radio" name="city" value="db"> Debrecen <br>
        <input type="radio" name="city" value="sz"> Szeged <br>
        <input type="radio" name="city" value="mk"> Miskolc <br>
        <input type="radio" name="city" value="ot"> Other <br>

        <h2>Foods</h2>
        <input type="checkbox" name="foods[]" value="bigmac"> BigMac <br>
        <input type="checkbox" name="foods[]" value="nuggets"> McNuggets <br>
        <input type="checkbox" name="foods[]" value="wrap"> McWrap <br>
        <input type="checkbox" name="foods[]" value="mcfarm"> McFarm <br>

        <h2>Other</h2>
        <textarea name="other"></textarea><br><br>

        <input type="hidden" name="sent" value="yes">
        <input type="submit">
    </form>
</body>
</html>