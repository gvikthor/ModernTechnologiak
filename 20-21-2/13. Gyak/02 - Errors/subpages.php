<?php //////////////////////// Movie List
function subpage_movie_list(){ ?>

    <?php $movies = jsonRead("movies.json"); ?>

    <table>
    <tr>
        <th>Title</th>
        <th>Year</th>
    </tr>
    <?php foreach($movies as $movie): ?>
        <tr>
            <td><?=$movie->title?></td>
            <td><?=$movie->year?></td>
        </tr>
    <?php endforeach ?>
    </table>

<?php } ?>

<?php ///
function subpage_login_register($logged_in, $error){ ?>
    <?php if($logged_in): ?>

    You are logged in 😎🤩🥰😍! Hi <?=$_SESSION["logged_in"]?>!<br>
    <form action="logout.php">
        <input type="submit" value="Logout">
    </form>

    <?php else: ?>

    You are not logged in! <br>
    <form action="login.php" method="POST">
        Username: <input name="uname"> <br>
        Password: <input name="pword" type="password"> <br>
        <input type="submit" value="Login">
    </form>
    <?php if($error != ""): ?>
    <div style="background-color: red;">
        Error: <?=$error?>
    </div>
    <?php endif ?>

    <br>

    <a href="createaccount.php">Don't have an ccount? Register one now!</a>

    <?php endif ?>
<?php } ?>