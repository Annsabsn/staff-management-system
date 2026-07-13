<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Content-Type: application/json");

include("../config/db.php");

if ($_SERVER["REQUEST_METHOD"] === "OPTIONS") {
    http_response_code(200);
    exit;
}

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    http_response_code(405);

    echo json_encode([
        "message" => "Only POST method is allowed"
    ]);

    exit;
}

$data = json_decode(
    file_get_contents("php://input"),
    true
);

if (
    !$data ||
    empty($data["name"]) ||
    empty($data["email"]) ||
    empty($data["role"]) ||
    empty($data["status"])
) {
    http_response_code(400);

    echo json_encode([
        "message" => "All fields are required"
    ]);

    exit;
}

$name = mysqli_real_escape_string($conn, $data["name"]);
$email = mysqli_real_escape_string($conn, $data["email"]);
$role = mysqli_real_escape_string($conn, $data["role"]);
$status = mysqli_real_escape_string($conn, $data["status"]);

$query = "
INSERT INTO employees
(name, email, role, status)
VALUES
('$name', '$email', '$role', '$status')
";

if (mysqli_query($conn, $query)) {

    echo json_encode([
        "message" => "Employee Added",
        "id" => mysqli_insert_id($conn)
    ]);

} else {

    http_response_code(500);

    echo json_encode([
        "message" => "Failed to add employee"
    ]);
}

?>