<?php function subpage_movie_list($movies){ ?>
    <table>
    <tr>
        <th>Title</th>
        <th>Year</th>
        <th>Director</th>
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
    </tr>
    <?php endforeach ?>
    <tr>
        <form action="add_movie.php">
            <td><input name="title"></td>
            <td><input name="year"></td>
            <td><input name="director"></td>
            <td><input type="submit" value="➕"></td>
        </form>
    </tr>
    </table>
<?php } // endfunction subpage_movie_list ?>