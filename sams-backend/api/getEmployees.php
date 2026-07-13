<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

include("../config/db.php");

$query = "SELECT * FROM employees";

$result = mysqli_query($conn, $query);

$employees = [];

while($row = mysqli_fetch_assoc($result)) {
    $employees[] = $row;
}

echo json_encode($employees);

?>