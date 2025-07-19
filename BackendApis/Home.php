<?php
include("Connection.php");

if (!isset($_GET["reg_id"])) {
    echo json_encode(["error" => "Missing reg_id"]);
    exit;
}

$reg_id = $_GET["reg_id"];

$sql = "SELECT * FROM credentials WHERE user_id = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("i", $reg_id);
$stmt->execute();
$result = $stmt->get_result();

$data = [];
while ($row = $result->fetch_assoc()) {
    $data[] = $row;
}

echo json_encode($data);
?>
