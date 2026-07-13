<?php

$host = "staff-mysql";
$user = "root";
$password = "root123";
$database = "sams_db";

$conn = mysqli_connect(
    $host,
    $user,
    $password,
    $database
);

if (!$conn) {
    die("Database Connection Failed: " . mysqli_connect_error());
}

?>