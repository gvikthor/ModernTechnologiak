<?php
/**
 * Átirányít egy másik oldalra és leállítja a script futását.
 * @param $target A cél file helye
 */
function redirect($target){
    header("Location: $target");
    die;
}

/**
 * Kapcsolódik egy adatbázishoz.
 * @param $db_file_name Az adatbázis fájl neve (pl. movies.db)
 */
function db_connect($db_file_name, $uname = "", $pw = ""){
    $db = new PDO("sqlite:".$db_file_name, $uname, $pw);
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    return $db;
}

/**
 * Lefuttat egy kérést az adatbázisban.
 * @param $db Az adatbázis kapcsolat
 * @param $sql Az SQL utasítás
 * @param $params Az utasítás paraméterei
 */
function db_query($db, $sql, $params = []){
    $query = $db->prepare($sql);
    $query->execute($params);
    return $query->fetchAll();
}

function get_all_movies(){
    $db = db_connect('movies.db');
    return db_query($db, 'select * from movies');
}

function get_movie_by_id($id){
    $db = db_connect('movies.db');
    $movies = db_query(
        $db,
        'select * from movies where id = :id',
        [
            'id' => trim($id ?? 0)
        ]
    );
    if(count($movies) != 1){
        throw new Exception('Movie ID does not exist.');
    }
    return $movies[0];
}

function get_user_by_username($username){
    $db = db_connect('movies.db');
    $users = db_query(
        $db,
        'select * from users where username = :username',
        [
            'username' => $username
        ]
    );
    if(count($users) != 1){
        throw new Exception('User does not exist');
    }
    return $users[0];
}

function check_user_exists($username){
    $db = db_connect('movies.db');
    $users = db_query(
        $db,
        'select * from users where username = :username',
        [
            'username' => $username
        ]
    );
    return count($users) > 0;
}

function create_user($user){
    $db = db_connect('movies.db');
    db_query(
        $db,
        'insert into users (username, password) values (:username, :password)',
        $user
    );
}