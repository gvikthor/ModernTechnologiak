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