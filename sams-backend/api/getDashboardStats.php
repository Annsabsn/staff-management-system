<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

include("../config/db.php");

$totalEmployeesQuery =
"SELECT COUNT(*) AS totalEmployees FROM employees";

$activeProjectsQuery =
"SELECT COUNT(*) AS activeProjects
 FROM projects
 WHERE status='Active'";

$pendingAssignmentsQuery =
"SELECT COUNT(*) AS pendingAssignments
 FROM employees
 WHERE status='Pending'";

$approvalsDueQuery =
"SELECT COUNT(*) AS approvalsDue
 FROM projects
 WHERE status='Delayed'";

$totalEmployees =
mysqli_fetch_assoc(
    mysqli_query($conn, $totalEmployeesQuery)
);

$activeProjects =
mysqli_fetch_assoc(
    mysqli_query($conn, $activeProjectsQuery)
);

$pendingAssignments =
mysqli_fetch_assoc(
    mysqli_query($conn, $pendingAssignmentsQuery)
);

$approvalsDue =
mysqli_fetch_assoc(
    mysqli_query($conn, $approvalsDueQuery)
);

$data = [
    "totalEmployees" =>
        $totalEmployees["totalEmployees"],

    "activeProjects" =>
        $activeProjects["activeProjects"],

    "pendingAssignments" =>
        $pendingAssignments["pendingAssignments"],

    "approvalsDue" =>
        $approvalsDue["approvalsDue"],
];

echo json_encode($data);

?>