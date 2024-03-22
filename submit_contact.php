<?php
// Replace 'your_username', 'your_password', 'your_database_name', and 'your_table_name' with your actual database details.
$servername = "localhost"; // Usually 'localhost'. Change if different.
$username = "root";
$password = "your_password";
$dbname = "my_datebase";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

// Prepare and bind
$stmt = $conn->prepare("INSERT INTO email_list (name, email, message) VALUES (?, ?, ?)");
$stmt->bind_param("sss", $name, $email, $message);

// Set parameters and execute
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];
$stmt->execute();

echo "New record created successfully";

$stmt->close();
$conn->close();
?>
