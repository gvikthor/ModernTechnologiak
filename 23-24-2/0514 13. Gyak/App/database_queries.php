<?php
require_once 'functions.php';

function get_all_movies(){
    $db = db_connect('movieapp');
    $query = 'select * from movies';
    return db_query($db, $query);
}

function get_movie_by_id($id){
    $db = db_connect('movieapp');
    $query = 'select * from movies where id = :id';
    $params = [
        'id' => $id,
    ];
    return db_query($db, $query, $params);
}

/**
 * This function will add a new movie to the database.
 * @param string $title The title of the movie
 */
function add_new_movie($title = '', $year = 0, $description = ''){
    $db = db_connect('movieapp');
    $query = 'insert into movies (title, year, description) values (:title, :year, :description)';
    $params = [
        'title' => $title,
        'year' => $year,
        'description' => $description
    ];
    return db_query($db, $query, $params);
}

/*
function add_new_movie_with_object($movie){
    $db = db_connect('movieapp');
    $query = 'insert into movies (title, year, description) values (:title, :year, :description)")';
    $params = $movie;
    return db_query($db, $query, $params);
}
*/

function edit_movie($id = '', $title = '', $year = 0, $description = ''){
    $db = db_connect('movieapp');
    $query = 'update movies set title=:title, year=:year, description=:description where id=:id';
    $params = [
        'id' => $id,
        'title' => $title,
        'year' => $year,
        'description' => $description
    ];
    return db_query($db, $query, $params);
}

function delete_movie($id = 0){
    $db = db_connect('movieapp');
    $query = 'delete from movies where id = :id';
    $params = [
        'id' => $id
    ];
    return db_query($db, $query, $params);
}

/////////////// user functions

function is_username_taken($uname){
    $db = db_connect('movieapp');
    $query = 'select count(*) as amount from users where username = :uname';
    $params = [
        'uname' => $uname
    ];
    return db_query($db, $query, $params)[0]['amount'] > 0;
}

function add_new_user($uname, $email, $pword){
    $db = db_connect('movieapp');
    $query = 'insert into users (username, email, password) values (:uname, :email, :pword)';
    // $id = uniqid();
    $params = [
        'uname' => $uname,
        'email' => $email,
        'pword' => password_hash($pword, PASSWORD_DEFAULT)
    ];
    db_execute($db, $query, $params);
}

function check_user_and_password($uname, $pword){
    $db = db_connect('movieapp');
    $query = 'select password from users where username = :uname';
    $params = [
        'uname' => $uname
    ];
    $result = db_query($db, $query, $params)[0]['password'] ?? '';
    return password_verify($pword, $result);
}

function is_admin($uname){
    $db = db_connect('movieapp');
    
    $query1 = 'select id from users where username = :uname';
    $params1 = [
        'uname' => $uname
    ];
    $result1 = db_query($db, $query1, $params1)[0]['id'] ?? '';

    if($result1 == '') return false;

    $query2 = 'select count(*) as amount from admins where userid = :id';
    $params2 = [
        'id' => $result1
    ];
    $result2 = db_query($db, $query2, $params2)[0]['amount'] ?? 0;

    return $result2 > 0; // tehát ez azt jelenti, hogy Peti userid-ját megtaláltuk az admins táblában
}