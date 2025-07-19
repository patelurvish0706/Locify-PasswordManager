<?php
session_start();
include("Connection.php");

if (!isset($_SESSION["user_id"])) {
    die("Login required.");
}

$entered_password = $_GET["profile_password"];
$user_id = $_SESSION["user_id"];

$sql = "SELECT profile_password FROM users WHERE id = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("i", $user_id);
$stmt->execute();

$result = $stmt->get_result();
$user = $result->fetch_assoc();

if (password_verify($entered_password, $user["profile_password"])) {
    echo "Verified";
} else {
    echo "Incorrect Profile Password";
}
?>
