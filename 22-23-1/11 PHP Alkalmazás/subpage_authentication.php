<?php function subpage_login_form(){ ?>
    <form method="POST" action="request_login.php">
        <input name="username" placeholder="Felhasználónév">
        <input name="password" placeholder="Jelszó" type="password">
        <input type="submit" value="Bejelentkez">
    </form>
    <a href="register.php">Nincs fiókod? Regisztrálj!</a>
<?php } // endfunction subpage_login_form ?>

<?php function subpage_logout_form(){ ?>
    <form method="POST" action="request_logout.php">
        <input type="submit" value="Kijelentkez">
    </form>
<?php } // endfunction subpage_logout_form ?>