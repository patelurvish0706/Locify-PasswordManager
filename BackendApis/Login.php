<?php
session_start();
include("Connection.php");

$email = $_GET["email"];
$password = $_GET["password"];
$profile_password = $_GET["profile_password"];

$sql = "SELECT * FROM users WHERE email = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("s", $email);
$stmt->execute();

$result = $stmt->get_result();
if ($result->num_rows === 1) {
    $user = $result->fetch_assoc();
    if (password_verify($password, $user["password"]) && password_verify($profile_password, $user["profile_password"])) {
        $_SESSION["user_id"] = $user["id"];
        echo "Login successful.";
    } else {
        echo "Incorrect password or profile password.";
    }
} else {
    echo "Email not found.";
}
?>
