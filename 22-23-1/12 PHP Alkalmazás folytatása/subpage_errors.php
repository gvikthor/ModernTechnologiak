<?php function subpage_error_list($errors){ ?>
    <ul>
        <?php foreach($errors as $error): ?>
            <li><?=$error?></li>
        <?php endforeach ?>
    </ul>
<?php } ?>