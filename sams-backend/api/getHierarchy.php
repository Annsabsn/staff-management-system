<?php

header("Access-Control-Allow-Origin: *");

header("Content-Type: application/json");

include("../config/db.php");

$query = "
SELECT
    *
FROM hierarchy
ORDER BY manager_id ASC
";

$result = mysqli_query($conn, $query);

$employees = [];

while($row = mysqli_fetch_assoc($result)) {

    $employees[] = $row;

}

echo json_encode($employees);

?>