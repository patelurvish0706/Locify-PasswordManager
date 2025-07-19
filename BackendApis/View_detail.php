<?php
session_start();
include("Connection.php");

if (!isset($_SESSION["user_id"])) {
    die("Login required.");
}

$user_id = $_SESSION["user_id"];
$sql = "SELECT site_name, site_password FROM credentials WHERE user_id = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("i", $user_id);
$stmt->execute();
$result = $stmt->get_result();

$sites = [];
while ($row = $result->fetch_assoc()) {
    $sites[] = $row;
}

header('Content-Type: application/json');
echo json_encode($sites);
?>
