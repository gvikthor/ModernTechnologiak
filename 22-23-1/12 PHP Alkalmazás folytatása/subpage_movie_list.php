<?php function subpage_movie_list($movies, $is_admin){ ?>
    <table>
    <tr>
        <th>Title</th>
        <th>Year</th>
        <th>Director</th>
        <?php if($is_admin): ?>
        <th>Delete</th>
        <?php endif ?>
    </tr>
    <?php foreach($movies as $movie): ?>
    <tr>
        <td>
            <a href="movie_details.php?id=<?=$movie['id']?>">
            <?=$movie['title']?>
            </a>
        </td>
        <td><?=$movie['year']?></td>
        <td><?=$movie['director']?></td>
        <?php if($is_admin): ?>
        <td><a href="request_movie_delete.php?id=<?=$movie['id']?>">🚯</a></td>
        <?php endif ?>
    </tr>
    <?php endforeach ?>
    <?php if($is_admin): ?>
    <tr>
        <form action="request_movie_create.php">
            <td><input name="title"></td>
            <td><input name="year"></td>
            <td><input name="director"></td>
            <td><input type="submit" value="➕"></td>
        </form>
    </tr>
    <?php endif ?>
    </table>
<?php } // endfunction subpage_movie_list ?>