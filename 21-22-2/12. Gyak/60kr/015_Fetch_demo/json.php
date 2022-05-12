<?php

$data = [
    (object)[
        "title" => "Star Wars",
        "release" => 1977
    ],
    (object)[
        "title" => "Dr Strange",
        "release" => 2022
    ],
    (object)[
        "title" => "Luca",
        "release" => 2021
    ]
];

echo json_encode($data);