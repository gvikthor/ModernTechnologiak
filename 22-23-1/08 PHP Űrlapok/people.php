<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form method="POST" action="people_check.php">
        Family name: <input name="familyname"><br>
        Given name: <input name="givenname"><br>
        Email: <input name="email"><br>
        Age: <input name="age"><br>
        Animal names: <textarea name="animalnames"></textarea><br>
        Which movie is your favourite?<br>
        <input type="radio" name="movie" value="Star Wars">Star Wars<br>
        <input type="radio" name="movie" value="Star Trek">Star Trek<br>
        <input type="radio" name="movie" value="Stargate">Stargate<br>
        <input type="radio" name="movie" value="Other">Other<br>
        <input type="checkbox" name="terms" value="1">I accept the terms<br>

        <input type="submit">
    </form>
</body>
</html>