<?php
include("Connection.php");

$name = $_GET["name"];
$email = $_GET["email"];
$phone = $_GET["phone"];
$password = password_hash($_GET["password"], PASSWORD_BCRYPT);
$profile_password = password_hash($_GET["profile_password"], PASSWORD_BCRYPT);

$sql = "INSERT INTO users (name, email, phone, password, profile_password)
        VALUES (?, ?, ?, ?, ?)";
$stmt = $conn->prepare($sql);
$stmt->bind_param("sssss", $name, $email, $phone, $password, $profile_password);

if ($stmt->execute()) {
    echo "Registration successful.";
} else {
    echo "Error: " . $stmt->error;
}
?>
