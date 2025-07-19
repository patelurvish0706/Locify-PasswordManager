<?php
session_start();
include("Connection.php");

if (!isset($_SESSION["user_id"])) {
    die("Login required.");
}

$user_id = $_SESSION["user_id"];
$site_name = $_GET["site_name"];
$site_password = $_GET["site_password"];

$sql = "INSERT INTO credentials (user_id, site_name, site_password) VALUES (?, ?, ?)";
$stmt = $conn->prepare($sql);
$stmt->bind_param("iss", $user_id, $site_name, $site_password);

if ($stmt->execute()) {
    echo "Website credentials saved.";
} else {
    echo "Failed to save credentials.";
}
?>
