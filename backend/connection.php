<?php
$servername = "localhost";
$username = "hosto";
$password = "hostoDB12345.";
$dbname = "hostoDB";

// Connexion à la base de données
$conn = new mysqli($servername, $username, $password, $dbname);

// Vérification de la connexion
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
