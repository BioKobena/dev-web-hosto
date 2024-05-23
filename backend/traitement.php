<?php
include './database/connexion.php'; 

$nom = $_POST['nom'];
$prenoms = $_POST['prenoms'];
$datenaissance = $_POST['datenaissance'];
$lieunaissance = $_POST['lieunaissance'];
$sexe = $_POST['sexe'];
$profession = $_POST['profession'];
$contact = $_POST['contact'];
$email = $_POST['email'];
$groupesanguin = $_POST['groupesanguin'];
$antecedent = $_POST['antecedent'];
$localisation = $_POST['localisation'];


$sql = "INSERT INTO dossier (nom, prenoms, datenaissance, lieunaissance, sexe, profession, contact, email, groupesanguin, antecedent, localisation) 
        VALUES ('$nom', '$prenoms', '$datenaissance', '$lieunaissance', '$sexe', '$profession', '$contact', '$email', '$groupesanguin', '$antecedent', '$localisation')";

if ($conn->query($sql) === TRUE) {
    // Afficher une notification avec Toastify.js
    echo "<script>
            Toastify({
                text: 'Enregistrement effectué avec succès',
                duration: 3000,
                gravity: 'bottom',
                position: 'right',
                backgroundColor: '#4CAF50',
                stopOnFocus: true,
            }).showToast();
          </script>";
} else {
    echo "Erreur lors de l'enregistrement des données: " . $conn->error;
}

// Fermer la connexion à la base de données
$conn->close();
?>