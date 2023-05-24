<?php function subpage_comment_list($movie_id){ ?>
    <?php $comments = get_all_comments_by_movie_id($movie_id) ?>
    <?php foreach($comments as $comment): ?>
        <div>
            <b><?=htmlspecialchars(get_username_by_userid($comment['user_id']))?> : </b> <br>
            <span><?=htmlspecialchars($comment['content'])?></span>
        </div>
    <?php endforeach ?>
    <form action="request_comment.php">
        <input type="hidden" name="movie_id" value="<?=$movie_id?>">
        <textarea name="content"></textarea>
        <input type="submit" value="Send comment">
    </form>

<?php } // endfunction subpage_comment_list ?>