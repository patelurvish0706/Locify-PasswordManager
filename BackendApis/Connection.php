<?php

$conn = new mysqli("localhost", "root", "", "locify");

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

?>
